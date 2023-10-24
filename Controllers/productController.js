import {} from "body-parser";
import  Product from "../Models/productModel.js";

export const productController = {

    addProduct: async (req, res) => {
        const { name, description, price, detail, brand, category, subCategory } = req.body
        // const images=req.files
        const images=req.files.map(image => image.path);
       const details= JSON.parse(detail)
        try {
            const product = await Product.create({ name, description,details, price,images, brand, category, subCategory })
            res.json(product)
        }
        catch (error) {
            res.status(404).json({ status: 404, error: error })
        }

        // return res.json({"details": JSON.parse(details),"images": images});
    },

    getById: async (req, res) => {//working
        const { id } = req.body
        try {
            const product = await Product.findById(id);
            res.status(200).json(product)
        } 
        catch (error) {
            res.status(404).json(error)
        }
    },

    deleteProduct: async (req, res) => { // working
        const { id } = req.body
        try {
            const deletedProduct = await Product.findByIdAndRemove(id);
            if (!deletedProduct) {
                res.status(404).json({ error: 'Product not found' })
            }
            res.status(200).json({ status: "Product Deleted" })

        } 
        catch (error) {
            res.status(404).json(error.message)
        }
    },

    editProduct: async (req, res) => {
        const { id, name, description, price, details, brand, category, subCategory } = req.body
        const images=req.files
        try {
            const editedProduct = await Product.findByIdAndUpdate(id, { name, description, price, details, images, brand, category, subCategory }, { new: true });
            res.status(200).json(editedProduct)
        } 
        catch (error) {
        }

    },
    getAll: async (req, res) => {// working
        try {
            const products = await Product.find()
            res.status(200).json(products)
        }
        catch (error) {
            res.status(404).json({ status: 404, error: error.message })
        }
    },

    getByCategory: async (req, res) => {//working
        let category = req.body.category;
        try {
            const products = await Product.find({ category: category })
            res.status(200).json(products)
        }
        catch (error) {
            res.status(404).json({ status: 404, error: error })
        }
    },

    getByCategoryAndBrand: async (req, res) => {//working
        let { category, brand } = req.body
        try {
            const products = await Product.find({ category: category, brand: brand })
            res.status(200).json(products)
        }
        catch (error) {
            res.status(404).json({ status: 404, error: error })
        }
    },

    getByFilter: async (req, res) => {
        try {
            const { category, brands, colors,sizes,subCategories,prices } = req.body
            // let color=details.color;
            // let sizesA=details.sizes;
    //  const productss=await Product.find()
console.log(req.body)
            // const query = {
            //     "category": category,
            //     $and: [$and:[]]
            // }
            const conditions=[]
            if (brands && brands.length > 0) {
                conditions.push({ "brand": { $in: brands } })
            }

            if (subCategories && subCategories.length > 0) {
                query.$and.push({ "subCategory": { $in: subCategories } })
            }
            // if (sizes && sizes.length > 0) {
            //     query.$and.$and.push({ "details.size" : { $in: sizesA } })
            // }
            if (colors && colors.length > 0) {
                conditions.push({ "details.color" : { $in: colors } })
            }
            // if (prices && prices.length > 0) {
            //     query.$and.$or.push({ price: { $in: prices } })
            // }
            // const products = await Product.find(query)
            // res.status(200).json(products)
            // query.$and[0]={$and:conditions}
            const products = await Product.find({
                "category": category,
                $and:conditions
            })

            res.status(200).json(products)
            console.log("condition"+conditions)
console.log(query)      
  }
        catch (error) {
            res.status(404).json({ status: 400, error: error.message })
        }
    },

}

