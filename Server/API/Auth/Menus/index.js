import express from "express";

import { MenuModel, ImageModel } from "../../../database/allmodels";

const Router = express.Router();

/*
Route : "/list"
Descri: Get list of the menu based on id
Params: NONE
Access: Public
Method: GET
*/

Router.get("/list/:_id", async(request,response) => {
    try {
        const {_id} = request.params;
        const menus = await MenuModel.findOne(_id);
        return response.json({menus});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

/*
Route : "/image"
Descri: Get menu image based on id
Params: NONE
Access: Public
Method: GET
*/

Router.get("/image/:_id", async(request,response) => {
    try {
        const {_id} = request.params;
        const menus = await ImageModel.findOne(_id);
        return response.json({menus});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;