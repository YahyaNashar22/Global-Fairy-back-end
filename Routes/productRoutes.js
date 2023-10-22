import express from "express"
import {productController  as product}from "../Controllers/productController.js"

export const routes=express.Router()
routes.post('/product/add',product.addProduct)
routes.get('/product/getId',product.getById)
routes.delete('/product/delete',product.deleteProduct)
routes.put('/product/update',product.editProduct)
routes.get('/products',product.getAll)
routes.get('/products/category',product.getByCategory)
routes.get('/products/category-brand',product.getByCategoryAndBrand)
routes.get('/product/filter',product.getByFilter)


