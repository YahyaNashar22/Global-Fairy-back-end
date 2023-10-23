import express from 'express';
import { createSubCategory, getAllSubCategories, deleteSubCategory ,getSubCategory} from '../Controllers/subCategoryController.js';

export const subCategoryRouter = express.Router();

subCategoryRouter.post('/add', createSubCategory);

// getAllSubCategories

subCategoryRouter.get('/read', getAllSubCategories);

// deleteSubCategory

subCategoryRouter.delete('/delete', deleteSubCategory);
subCategoryRouter.get('/readone', getSubCategory);


