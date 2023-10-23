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

export default mongoose.model('Brand', brandSchema);

// export default Brand;