import express from "express"
import {ContactController}from "../Controllers/ContactController.js"

export const contactRouter = express.Router()

// Route to create a contact (POST requests to add using the "addContact" function)
contactRouter.post('/add', ContactController.addContact);

// Route to fetch contact (GET requests to read using the "getContact" function)
contactRouter.get('/read',ContactController.getContact);
