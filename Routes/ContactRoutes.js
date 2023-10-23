import express from "express"
import {ContactController}from "../Controllers/ContactController.js"

export const contactRouter = express.Router()

contactRouter.post('/add', ContactController.addContact);

contactRouter.get('/read',ContactController.getContact);
