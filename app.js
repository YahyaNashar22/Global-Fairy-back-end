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
import { Room } from "./Models/chatModel.js";

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

  const onlineArray = [];

  socket.on('create', (room)=> {  
    if(checkRoom(room)){
      socket.join(room);
      console.log(`User ${socket.id} connected to room: ${room}`);
    } else {
      console.log("room not found");
      
    } 

  })  
  
  socket.on('userConnect', (arg)=>{
    console.log(`user: ${arg} has just connected`);
  })

  socket.on('message', async(data, userid) => {
    console.log("message:" ,data, userid);
    const room = await Room.findOne({userid: userid})
    socket.to(room).emit('message', `${data}`)
    socket.emit("onlineUsers", onlineArray );
    // socket.to(room).broadcast.emit('ping');
  });

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`);
    
  });

  socket.on('online', (id)=>{
    console.log("online became id: ", id)
    onlineArray.push(id);
    console.log("online array: ",onlineArray)
    socket.emit("onlineUsers", onlineArray );
  })

  socket.on('offline', (id)=>{
    console.log("offline id: ", id)
    const index = onlineArray.indexOf(id);
    onlineArray.splice(index, 1);
  })
  console.log("online array: ",onlineArray)
});

io.listen(4500);



