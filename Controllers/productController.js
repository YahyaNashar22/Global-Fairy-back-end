import  Product from "../Models/productModel.js";
/**
 * Add x
 * Edit
 * Deletex
 * getby Id x
 * get by attributes(color,size,price,brand,categpry,)
 */
export const productController = {

    addProduct: async (req, res) => {
        const { name, description, price, details, brand, category, subCategory } = req.body
        const images=req.files//Images not wokring
        try {
            const product = await Product.create({ name, description, price, details, images, brand, category, subCategory })
            res.json(product)
        }
        catch (error) {
            res.status(404).json({ status: 400, error: error })
        }
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
            const { category, brands, details,subCategories, colors,sizes, prices } = req.body
            let color=details.color;
            let sizesA=details.sizes;

            const query = {
                category: category,
                $and: []
            }
            if (brands && brands.length > 0) {
                query.$and.push({ brand: { $in: brands } })
            }
            // if (subCategories && subCategories.length > 0) {
            //     query.$and.push({ subCategory: { $in: subCategories } })
            // }
            if (sizes && sizes.length > 0) {
                query.$and.push({ sizes : { $in: sizesA } })
            }
            // if (colors && colors.length > 0) {
            //     query.$and.push({ color: { $in: colors } })
            // }
            // if (prices && prices.length > 0) {
            //     query.$and.push({ price: { $in: prices } })
            // }
            const products = await Product.find(query)
            res.status(200).json(products)
        }
        catch (error) {
            res.status(404).json({ status: 400, error: error })
        }
    },

}

