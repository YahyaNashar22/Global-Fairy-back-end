import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CategoryModel = new Schema({

    name: {
        type: String,
        required:true
    },
});

export default mongoose.model('Category', CategoryModel)