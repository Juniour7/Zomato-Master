import express from "express";

import {FoodModel} from "../../../database/allmodels";

//Validation
import {ValidateRestrauntId, ValidateCategory} from "../../../validation/food";


const Router = express.Router();

/*
Route            /
Des              Get all the foods based on particular restaurant
Params           _id
Access           Public
Method           GET
*/

Router.get("/:_id", async(request,response) => {
    try {
        await ValidateRestrauntId(request.params);
        const {_id} = request.params;
        const foods = await FoodModel.find({restraunt: _id});
        return response.json({foods})
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

/*
Route            /
Des              Get all the foods based on particular category
Params           category
Access           Public
Method           GET
*/

Router.get("/r/:category", async(request,response) => {
    try {
        await ValidateCategory(request.params);
        const {category} = request.params;
        const foods = await FoodModel.find({
            category: {$regex: category, $options: "i"}
        });
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;