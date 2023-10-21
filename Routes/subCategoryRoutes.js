import express from 'express';
import { createSubCategory } from '../controllers/brandController.js';

const router = express.Router();

router.post('/subcategories', createSubCategory);

export default router;