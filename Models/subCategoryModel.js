import mongoose from 'mongoose';

// Define the schema for the subCategory (it has the name and category)
const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
});

// Create a mongoose model named (SubCategory) based on the (subCategorySchema) and export it
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;