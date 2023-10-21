import express from 'express';
import { createSubCategory, getAllSubCategories } from '../controllers/brandController.js';

const router = express.Router();

router.post('/subcategories', createSubCategory);

// getAllSubCategories
router.get('/subcategories', getAllSubCategories);

export default router;