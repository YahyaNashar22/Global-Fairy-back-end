import express from 'express';
import { createBrand, getAllBrands, deleteBrand ,getBrand,getBrandCategories,categoryBrands} from '../Controllers/brandController.js';

export const brandRouter = express.Router();

// Route to add a brand (POST requests to add using the "createBrand" function)
brandRouter.post('/add', createBrand);

// Route to fetch all brands (GET requests to read using the "getAllBrands" function)
brandRouter.get('/read', getAllBrands);

// Route to fetch a brand (GET requests to readone using the "getBrand" function)
brandRouter.get('/readone', getBrand);

// Route to delete a brand (DELETE requests to delete using the "deleteBrand" function)
brandRouter.delete('/delete', deleteBrand);

brandRouter.get('/getCategories',getBrandCategories)

brandRouter.get('/brandscategory',categoryBrands)

