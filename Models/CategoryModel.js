import mongoose from 'mongoose';

// Define the schema for the category (it has the name)
const Schema = mongoose.Schema;
const CategoryModel = new Schema({
    name: {
        type: String,
        required:true
    },
});

// Create a mongoose model named (Category) based on the (CategoryModel) and export it
export default mongoose.model('Category', CategoryModel)