import express from "express"
import {productController  as product, productController}from "../Controllers/productController.js"
import upload from "../Middlewares/uploadImage.js"

export const productRouter = express.Router()

// Route to add a product (POST requests to add using the "addProduct" function)
productRouter.post('/add',upload.array("images",4),product.addProduct)

// Route to fetch a product (GET requests to getId using the "getById" function)
productRouter.get('/getId/:id',product.getById)

// Route to delete a product (DELETE requests to delete using the "deleteProduct" function)
productRouter.delete('/delete',product.deleteProduct)

// Route to update a product (PUT requests to update using the "editProduct" function)
productRouter.put('/update',upload.array('images',4),product.editProduct)

// Route to fetch all products (GET requests to get using the "getAll" function)
productRouter.get('/get',product.getAll)

// Route to fetch products by category (GET requests to category using the "getByCategory" function)
productRouter.get('/category/:id',product.getByCategory)

// Route to fetch products by category and brand (GET requests to category-brand using the "getByCategoryAndBrand" function)
productRouter.get('/category-brand',product.getByCategoryAndBrand)

// Route to filter products based on various criteria (POST requests to filter using the "getByFilter" function)
productRouter.get('/filter',product.getByFilter)

//Update the stock of a product
productRouter.put('/updateStock',productController.updateProductStock)