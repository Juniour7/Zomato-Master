import express from "expres";

import { UserModel } from "../../../database/allmodels";

const Router = express.Router();

/*
Route : "/"
Descri: Get a user data
Params: _id
Access: Piblic
Method: GET
*/

Router.get("_id", async(request, response) => {
    try {
        const {_id} = request.params;
        const getUser = await UserModel.findById(_id);
        return response.json({user: getUser});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

/*
Route : "/update"
Descri: uodate a  auser data
Params: _userId
Body:   user data
Access: Piblic
Method: PUT
*/

Router.put("/update", async(request,response) => {
    try {
        const {_userId} = request.params;
        const {userData} = request.body;
        const updateUserData = await UserModel.findByAndUpdate(
            userId,
            {
                $set: userData
            },
            {new: true}
        );
        return response.json({user: updateUserData});
    } catch(error) {

    }
});