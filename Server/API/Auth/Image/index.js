import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
 
//Database Model
import { ImageModel } from "../../../database/images";

//Utilities
import {s3Upload} from "../../../Utilitis/AWS/S3";

//Express configuration
const Router = express.Router();

//Multer configuration
const storage = multer.memoryStorage(); //Multer is basically used to upload files to the RAM of the server
const upload = multer({storage}); //Then uploads to the RAM of the AWS

/*
Route            /
Des              Uploading given image to S3 bucket , and then saving the file to mongodb
Params           None
Access           Public
Method           POST
*/

Router.post("/", upload.single("file") ,async(request,response) => {
    try {
        const file = request.file;
        //Bucket options
        const bucketOptions = {
            Bucket: "zomatomaster123",
            key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };
        const uploadImage = await s3Upload(bucketOptions);
        return response.status(200).json({uploadImage});
    } catch(error) {
        return response.status(500).json({error: error.message});
    }
});

export default Router;