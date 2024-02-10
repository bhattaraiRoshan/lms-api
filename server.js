import "dotenv/config"
import express from "express"
import cors from "cors";
import { connectToMongoDb } from "./src/config/dbConfig.js";


const PORT = process.env.PORT ||  8000
const app = express();

// middlewares;

app.use(cors());
app.use(express.json())

// connect 
connectToMongoDb()






app.listen(PORT, (error)=>{
    error ? console.log(error) : console.log("Server is runing");

})