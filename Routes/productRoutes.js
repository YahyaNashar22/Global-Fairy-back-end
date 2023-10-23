import express from "express"
import {productController  as product}from "../Controllers/productController.js"
import upload from "../Middlewares/uploadImage.js"

export const productRouter = express.Router()
productRouter.post('/add',upload.array("images",4),product.addProduct)
productRouter.get('/getId',product.getById)
productRouter.delete('/delete',product.deleteProduct)
productRouter.put('/update',upload.array('images',4),product.editProduct)
productRouter.get('/get',product.getAll)
productRouter.get('/category',product.getByCategory)
productRouter.get('/category-brand',product.getByCategoryAndBrand)
productRouter.get('/filter',product.getByFilter)

