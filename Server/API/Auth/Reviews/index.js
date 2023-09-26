import express from "express";

import { ReviewModel } from "../../../database/reviews";

const Router = express.Router();

/*
Route            /new
Des              Add new review
Params           none
BODY             Review object
Access           Public
Method           POST
*/

Router.post("/new", async(request,response) => {
    try {
        const { reviewData } = request.body;
        await ReviewModel.create(reviewData);
        return response.json({review: "Succesfully Created Review"});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

/*
Route            /delete
Des              Delete a review
Params           _id
Access           Public
Method           DELETE
*/

Router.delete("/delete/:_id", async(request,response) => {
    try {
        const { _id } = request.params;
        await ReviewModel.findByIdAndDelete(_id);
        return response.json({review: "Successfuly Delted Review"});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;