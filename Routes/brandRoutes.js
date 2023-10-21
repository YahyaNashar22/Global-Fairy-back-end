import express from 'express';
import { createBrand } from '../controllers/brandController.js';

const router = express.Router();

router.post('/brands', createBrand);

export default router;