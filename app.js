import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "dotenv/config";
import connectDB from "./Config/mongoConfig.js";
import { productRouter } from "./Routes/productRoutes.js";
import { brandRouter } from "./Routes/brandRoutes.js";
import { categoryRouter } from "./Routes/CategoryRoutes.js";
import { subCategoryRouter } from "./Routes/subCategoryRoutes.js";
import { contactRouter } from "./Routes/ContactRoutes.js";
import { userRouter } from "./Routes/usersRoutes.js";
import cors from "cors";
import chatRouter from "./Routes/ChatRoutes.js";
import http from "http"; // import http module to create a server
import { Server } from 'socket.io';

const app = express();
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
const PORT = process.env.PORT;
app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Running, and App is listening on port " + PORT);
  } else {
    console.log("Error: ", error);
  }
});
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/product", productRouter);
app.use("/brand", brandRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);
app.use("/contact", contactRouter);
app.use("/user", userRouter);
app.use("/Images", express.static("Images"));
app.use("/chat", chatRouter);


const server = http.createServer(app); // create an HTTP server using express app
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    // origin: "*",
    methods: ["GET", "POST"]
  }
});




io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);


  socket.on('create', (room)=> {  
    if(checkRoom(room)){
      socket.join(room);
      console.log(`User ${socket.id} connected to room: ${room}`);
    } else {
      console.log("room not found");
      
    } 

  })  
  
  socket.on('message', (data) => {
    console.log(data);
    // socket.broadcast.emit('message', `${socket.id.substring(0, 5)}: ${data}`);
    socket.to(one).emit('message', `${socket.id.substring(0, 5)}: ${data}`);
  });

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`);
    
  });
});

io.listen(4500);