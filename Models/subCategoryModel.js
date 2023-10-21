import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;