//Dotenv configuration
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//google Auth
//import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//API
import Auth from "./API/Auth";
import Restraunt from "./API/Auth/Restraunt";
import Food from "./API/Auth/Food";
import Menu from "./API/Auth/Menus";
import Review from "./API/Auth/Reviews";
import Image from "./API/Auth/Image";
import Order from "./API/Auth/Orders";

//Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: "false"}));
zomato.use(cors());
zomato.use(helmet());
//zomato.use(passport.initialize());
//zomato.use(passport.session());

//passport configuration
//googleAuthConfig(passport);
routeConfig(passport);

//For aplication routes
//The route for this will be localhost:4000/auth/signup signup is included in th auth folder
zomato.use("/auth", Auth);
zomato.use("/restraunt", Restraunt);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/reviews", Review);
zomato.use("/Image", Image);
zomato.use("/order", Order);

zomato.get("/", (request,response) => response.json({message: "SetUp Success Yay!!!"}));

zomato.listen(4000, () => ConnectDB().then(() => console.log("Server is up and running"))
.catch(() => console.log("DB Connection failed")));