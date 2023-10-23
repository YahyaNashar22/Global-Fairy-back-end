import express from 'express';
import { createBrand, getAllBrands, deleteBrand ,getBrand} from '../Controllers/brandController.js';

export const brandRouter = express.Router();

brandRouter.post('/add', createBrand);

// getAllBrands
brandRouter.get('/read', getAllBrands);
// get Brand
brandRouter.get('/readone', getBrand);

// deleteBrand (by id)
brandRouter.delete('/delete', deleteBrand);

