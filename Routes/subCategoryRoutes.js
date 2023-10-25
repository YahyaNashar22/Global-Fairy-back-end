import express from 'express'; // subCategory
import { createSubCategory, getAllSubCategories, deleteSubCategory ,getSubCategory,getSubForCat} from '../Controllers/subCategoryController.js';

export const subCategoryRouter = express.Router();

// Route to add a subCategory (POST requests to add using the "createSubCategory" function)
subCategoryRouter.post('/add', createSubCategory);

// Route to fetch all subCategories (GET requests to read using the "getAllSubCategories" function)
subCategoryRouter.get('/read', getAllSubCategories);

// Route to delete a subCategory (DELETE requests to delete using the "deleteSubCategory" function)
subCategoryRouter.delete('/delete', deleteSubCategory);

subCategoryRouter.get('/readCategories', getSubForCat);

// Route to fetch a subCategory (GET requests to readone using the "getSubCategory" function)
subCategoryRouter.get('/readone', getSubCategory);