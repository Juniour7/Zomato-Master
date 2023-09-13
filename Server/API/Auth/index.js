import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Router = express.Router();

//Schema
import { UserModel } from "../../database/users";

/* 
Route:          /signup
Description:    Sign up with email and password
Params:         None
Method:         POST
*/

Router.post("/signup", async(request,response) => {
    try{
        await UserModel.findEmailAndPhone(request.body.credentials);

        //Mongo DB 
        const newUser = await UserModel.create(request.body.credentials);

        //JWT Auth Token
        const token = newUser.generateJwtToken();
        return response.status(200).json({token});
    } catch (error) {
        return response.status(500).json({error: error.message});
    }
});


/* 
Route:          /signin
Description:    Signin with email and password
Params:         None
Method:         POST
*/

Router.post("/signin", async(request,response) => {
    try{
        const user = await UserModel.findByEmailAndPassword(
            request.body.credentials
        );

        //JWT Auth Token
        const token = user.generateJwtToken();
        return response.status(200).json({token, status: "Success"});
    } catch (error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;