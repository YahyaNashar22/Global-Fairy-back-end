import express from "express"
import {CategoryController}from "../Controllers/CategoryController.js"

export const categoryRouter = express.Router()

// Route to add a category (POST requests to add using the "addCategory" function)
categoryRouter.post('/add', CategoryController.addCategory);

// Route to delete a category (DELETE requests to delete using the "deleteCategory" function)
categoryRouter.delete('/delete',CategoryController.deleteCategory);

// Route to fetch all categories (GET requests to read using the "getCategories" function)
categoryRouter.get('/read',CategoryController.getCategories);

// Route to fetch a category (GET requests to readone using the "getCategory" function)
categoryRouter.get('/readOne',CategoryController.getCategory);

categoryRouter.get('/readByName',CategoryController.getCategoryByName)