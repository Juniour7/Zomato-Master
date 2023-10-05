import express from "express";

import { RestrauntModel } from "../../../database/allmodels";

const Router = express.Router();

//Validation
import {ValidateRestrauntCity, ValidateRestaurantSearchString} from "../../../validation/restraunt";
import { ValidateRestrauntId } from "../../../validation/food";

/*
Route : "/"
Descri: Get all restraunts details
Params: NONE
Access: Piblic
Method: GET
*/

Router.get("/", async(request,response) => {
    try{
        await ValidateRestrauntCity(request.query);
        const {city} = request.query;
        const restraunts = await RestrauntModel.find({city});
        return response.json({restraunts});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

/*
Route : "/"
Descri: Get particular restraunt details on id
Params: NONE
Access: Piblic
Method: GET
*/

Router.get("/:_id", async(request, response) => {
    try{
        await ValidateRestrauntId(request.params);
        const {_id} = request.params;
        const restraunt = await RestrauntModel.findOne(_id);
        if(!restraunt)
        return response.status(404).json({error: "Restraunt Not Found"});
        return response.json({restraunt});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

/*
Route            /search
Des              Get Restaurant details search
Params           none
Body             searchString
Access           Public
Method           GET
*/
/*xxxxyyyyyaaaabbbbb*/

Router.get("/search", async(req,res)=> {
    try {
  
     await ValidateRestaurantSearchString(req.body);
  
      const {searchString} = req.body;
  
      const restaurants = await RestaurantModel.find({
        name: {$regex: searchString, $options: "i"},
      });
  
      return res.json({restaurants});
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
} );
  

export default Router;