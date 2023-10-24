import mongoose from 'mongoose';

// Define the schema for the brand (it has the name and categories)
const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

// Create a mongoose model named (Brand) based on the (brandSchema) and export it
export default mongoose.model('Brand', brandSchema);