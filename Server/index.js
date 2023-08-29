import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: "false"}));
zomato.use(cors());
zomato.use(helmet());

zomato.get("/", (request,response) => response.json({message: "SetUp Success Yay!!!"}));

zomato.listen(4000, () => console.log("Server is up and running"));