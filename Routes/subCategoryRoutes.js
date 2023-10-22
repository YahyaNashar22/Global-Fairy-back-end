import express from 'express';
import { createSubCategory, getAllSubCategories, deleteSubCategory } from '../controllers/brandController.js';

const router = express.Router();

router.post('/subcategories', createSubCategory);

// getAllSubCategories

router.get('/subcategories', getAllSubCategories);

// deleteSubCategory

router.delete('/subcategories/:id', deleteSubCategory);


export default router;