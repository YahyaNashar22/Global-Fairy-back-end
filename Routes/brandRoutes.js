import express from 'express';
import { createBrand, getAllBrands } from '../controllers/brandController.js';

const router = express.Router();

router.post('/brands', createBrand);

// getAllBrands
router.get('/brands', getAllBrands);

// deleteBrand (by id)
router.delete('/brands/:id', deleteBrand);

export default router;