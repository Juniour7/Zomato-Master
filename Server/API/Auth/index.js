import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Schema
import { UserModel } from "../../database/users";

const Router = express.Router();

/* 
Route:          /signup
Description:    Sign up with email and password
Params:         None
Method:         POST
*/

Router.post("/signup", async(request,response) => {
    try{
        const { email, password, phoneNumber, fullname } = request.body.credentials;
        await UserModel.findEmailAndPhone(email,phoneNumber);
      
        //Mongo DB 
        await UserModel.create({
            ...request.body.credentials,
            password: hashedPassword
        });

        //JWT Auth Token
        const token = jwt.sign({user: {fullname, email}}, "ZomatoApp");
        return response.status(200).json({token});
    } catch (error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;