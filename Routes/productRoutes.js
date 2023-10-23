import express from "express"
import {productController  as product}from "../Controllers/productController.js"

export const productRouter = express.Router()
productRouter.post('/add',product.addProduct)
productRouter.get('/getId',product.getById)
productRouter.delete('/delete',product.deleteProduct)
productRouter.put('/update',product.editProduct)
productRouter.get('/',product.getAll)
productRouter.get('/category',product.getByCategory)
productRouter.get('/category-brand',product.getByCategoryAndBrand)
productRouter.get('/filter',product.getByFilter)


