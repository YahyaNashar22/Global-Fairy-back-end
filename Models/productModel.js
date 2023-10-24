import mongoose from "mongoose";

// Define the schema for the category 
// it has the "name, description, price, details[{color, stock, sizes[]}], images, brand, categort and subCategory"

const Schema = mongoose.Schema;

const productModel = new Schema({
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

// Create a mongoose model named (Product) based on the (productModel) and export it
export default mongoose.model('Product', productModel)