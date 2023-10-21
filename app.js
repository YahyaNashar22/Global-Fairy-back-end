import express from "express";
import {} from "dotenv/config";
import connectDB from "./Config/mongoConfig.js";


const app = express();
const PORT = process.env.PORT;
app.listen(PORT, (error) =>{ 
    if(!error) {
        console.log("Server is Running, and App is listening on port "+ PORT) 
    } else {
        console.log("Error: ", error)
    }
} 
);
connectDB()

// Error handling
app.use((err) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message }); 
})