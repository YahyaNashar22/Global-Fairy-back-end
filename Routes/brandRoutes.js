import express from 'express';
import { createBrand, getAllBrands, deleteBrand } from '../Controllers/brandController.js';

export const brandRouter = express.Router();

brandRouter.post('/add', createBrand);

// getAllBrands
brandRouter.get('/read', getAllBrands);

// deleteBrand (by id)
brandRouter.delete('/delete', deleteBrand);

