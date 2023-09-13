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
        const {email, phoneNumber, password, fullname} = request.body.credentials;
        await UserModel.findEmailAndPhone(email, phoneNumber);

        //hashing and salting
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //Mongo DB 
        await UserModel.create({
            ...request.body.credentials,
            password: hashedPassword
        });

        //JWT Auth Token
        const token = newUser.generateJwtToken();
        return response.status(200).json({token});
    } catch (error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;