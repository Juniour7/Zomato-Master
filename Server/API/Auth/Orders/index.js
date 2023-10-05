import express from "express";
import passport from "passport";

import { OrderModel } from "../../../database/order";

const Router = express.Router();

/*
Route            /
Des              Get all orders based on _id
Params           _id
Access           Public
Method           GET
*/

Router.get("/:_id",passport.authenticate("jwt", {session: false}), async(request,response) => {
    try {
        const {_id} = request.params;
        const getOrders = await OrderModel.findOne({user: _id});
        if(!getOrders) {
            return response.status(404).json({error: "User not found"});
        }
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

/*
Route            /new
Des              Add new order
Params           _id
Access           Public
Method           POST
*/

Router.post("/mew/:_id", async(request,response) => {
    try {
        const {_id} = request.params;
        const {orderDetails} = request.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: {orderDetails: orderDetails}
            },
            {
                new: true
            }
        );
        return response.json({order: addNewOrder});
    } catch(errror) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;