//Dotenv configuration
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

//API
import Auth from "./API/Auth";

//Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: "false"}));
zomato.use(cors());
zomato.use(helmet());

//For aplication routes
//The route for this will be localhost:4000/auth/signup signup is included in th auth folder
zomato.use("/auth", Auth);

zomato.get("/", (request,response) => response.json({message: "SetUp Success Yay!!!"}));

zomato.listen(4000, () => ConnectDB().then(() => console.log("Server is up and running"))
.catch(() => console.log("DB Connection failed")));