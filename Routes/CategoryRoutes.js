import express, { Router } from "express"
import {CategoryController  as Category}from "../Controllers/CategoryController.js"

const Router = express.Router()

Router.post('/Category/add',Category.addCategory);

Router.delete('/Category/delete',Category.deleteCategory);

Router.get('/Category/read',Category.getCategories);
Router.get('/Category/readOne',Category.getCategory);



export default Router;