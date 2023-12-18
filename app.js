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
