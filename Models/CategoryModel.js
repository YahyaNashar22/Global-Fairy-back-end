import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CategoryModel = new Schema({
//  _id: {
//         type: Number,
//     },
    name: {
        type: String,
        required:true
    },
});

export default mongoose.model('Category', CategoryModel)