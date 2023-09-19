import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

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

/* 
Route:          /google
Description:    Google Signin 
Params:         None
Method:         Get
*/

Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ],
}));

/* 
Route:          /google/callback
Description:    Google Signin callback
Params:         None
Method:         Get
*/

Router.get("/google/callback", passport.authenticate("google", {failureRedidrect: "/"}),
(request,response) => {
    return response.json({token: request.session.passport.user.token});
}
);

export default Router;