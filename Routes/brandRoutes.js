import express from 'express';
import { createBrand, getAllBrands } from '../controllers/brandController.js';

const router = express.Router();

router.post('/brands', createBrand);

// getAllBrands
router.get('/brands', getAllBrands);

export default router;