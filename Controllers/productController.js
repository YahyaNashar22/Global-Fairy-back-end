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
        const images=req.files.path
        try {
            const product = await Product.create({ name, description, price, details, images, brand, category, subCategory })
            res.json(product)
        }
        catch (error) {
            res.status(404).json({ status: 400, error: error })
        }
    },

    getById: async (req, res) => {
        const { id } = req.body
        try {
            const product = await Product.findByPk(id);
            res.status(200).json(product)
        } 
        catch (error) {
            res.status(404).json(error)
        }
    },

    deleteProduct: async (req, res) => {
        const { id } = req.body
        try {
            const deletedProduct = await Product.findByIdAndRemove(id);
            if (!deletedProduct) {
                res.status(404).json({ error: 'Product not found' })
            }
            res.status(200).json({ status: "Product Deleted" })

        } 
        catch (error) {
            res.status(404).json(error)
        }
    },

    editProduct: async (req, res) => {
        const { id, name, description, price, details, brand, category, subCategory } = req.body
        const images=req.files.path
        try {
            const editedProduct = await Product.findByIdAndUpdate(id, { name, description, price, details, images, brand, category, subCategory }, { new: true });
            res.status(200).json(editedProduct)
        } 
        catch (error) {
        }

    },
    getAll: async (req, res) => {
        try {
            const products = Product.find()
            res.status(200).json(products)
        }
        catch (error) {
            res.status(404).json({ status: 400, error: error })
        }
    },

    getByCategory: async (req, res) => {
        let category = req.body.category;
        try {
            const products = Product.find({ category: category })
            res.status(200).json(products)
        }
        catch (error) {
            res.status(404).json({ status: 400, error: error })
        }
    },

    getByCategoryAndBrand: async (req, res) => {
        let { category, brand } = req.body
        try {
            const products = Product.find({ category: category, brand: brand })
        }
        catch (error) {
            res.status(404).json({ status: 400, error: error })
        }
    },

    getByFilter: async (req, res) => {
        try {
            const { category, brands, subCategories, sizes, colors, prices } = req.body

            const query = {
                category: category,
                $and: []
            }
            if (brands && brands.length > 0) {
                query.$and.push({ brand: { $in: brands } })
            }
            if (subCategories && subCategories.length > 0) {
                query.$and.push({ subCategory: { $in: subCategories } })
            }
            if (sizes && sizes.length > 0) {
                query.$and.push({ sizes: { $in: sizes } })
            }
            if (colors && colors.length > 0) {
                query.$and.push({ color: { $in: sizes } })
            }
            if (prices && prices.length > 0) {
                query.$and.push({ price: { $in: prices } })
            }
            const products = await Product.find(query)
        }
        catch (error) {
            res.status(404).json({ status: 400, error: error })
        }
    },

}


// export default productController