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

        //check whether email or phone number exists
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        //if email or phone number exists then 
        if(checkUserByEmail || checkUserByPhone) {
            return response.json({error: "User already exists"});
        }

        //hashing and salting
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

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