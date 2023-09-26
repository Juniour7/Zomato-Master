import express from "express";

import { RestrauntModel } from "../../../database/allmodels";

const Router = express.Router();

/*
Route : "/"
Descri: Get all restraunts details
Params: NONE
Access: Piblic
Method: GET
*/

Router.get("/", async(request,response) => {
    try{
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
        const {_id} = request.params;
        const restraunt = await RestrauntModel.findOne(_id);
        if(!restraunt)
        return response.status(404).json({error: "Restraunt Not Found"});
        return response.json({restraunt});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;