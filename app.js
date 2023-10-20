import express from "express";
import {} from "dotenv/config";
import connectDB from "./Config/mongoConfig.js";
const app = express();

const PORT = process.env.PORT;
app.listen(PORT, (error) =>{ 
    console.log("Server is Running, and App is listening on port "+ PORT) 
} 
);
connectDB()