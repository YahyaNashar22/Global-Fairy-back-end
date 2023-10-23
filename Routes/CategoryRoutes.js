import express from "express"
import {CategoryController}from "../Controllers/CategoryController.js"

export const categoryRouter = express.Router()

categoryRouter.post('/add', CategoryController.addCategory);

categoryRouter.delete('/delete',CategoryController.deleteCategory);

categoryRouter.get('/read',CategoryController.getCategories);
categoryRouter.get('/readOne',CategoryController.getCategory);



