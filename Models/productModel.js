import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productModel = new Schema({
    _id: {
        type: Number,
    },
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true

    },
    price: {
        type: Number,
        min: 1,
        required:true
    },
    details: [
        {
            color: {
                type: String
            },
            stock: {
                type: Number,
                min: 0
            },
            sizes: [{
                type: String,
                enum: ['small', 'medium', 'large', 'Xlarge']
            }

            ]
        }
    ],
    images: [
        {
            type: String
        }
    ]
    ,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required:true

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true

    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required:true

    }
}

)

export default mongoose.model('Product', productModel)