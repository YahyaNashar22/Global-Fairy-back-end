import  express from "express";

const app = express(); 
const PORT = process.env.PORT; 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);