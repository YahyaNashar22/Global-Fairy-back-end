import express from "express";
import {
  signup,
  login,
  logout,
  getAll,
  getOne,
  updateUser,
  deleteUser,
} from "../Controllers/usersController.js";
import upload from "../Middlewares/uploadImage.js";

export const userRouter = express.Router();

userRouter.post("/signup", upload.single("picture"), signup);
userRouter.post("/login", login);
userRouter.get("/getone:id", getOne);

userRouter.get("/logout", logout);
userRouter.get("/getall", getAll);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);
