import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
    _id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;