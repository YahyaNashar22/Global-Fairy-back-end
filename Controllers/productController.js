import {} from "body-parser";
import  Product from "../Models/productModel.js";

export const productController = {

// Controller function to add a new product
addProduct: async (req, res) => {
    const { name, description, price, detail, brand, category, subCategory } = req.body
    const images=req.files.map(image => image.path);
    const details= JSON.parse(detail)
    try {
        const product = await Product.create({ name, description,details, price,images, brand, category, subCategory })
        res.json(product)
    }
    catch (error) {
        res.status(404).json({ status: 404, error: error })
    }
},

// Controller function to fetch a product
getById: async (req, res) => {
    const { id } = req.body
    try {
        const product = await Product.findById(id);
        res.status(200).json(product)
    } 
    catch (error) {
        res.status(404).json(error)
    }
},

// Controller function to delete a product
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
    res.status(404).json(error.message)
}
},

// Controller function to edit a product
editProduct: async (req, res) => {
    const { id, name, description, price, details, brand, category, subCategory } = req.body
    const updatedFields={ name, description, price, details, brand, category, subCategory }
        if(req.files) {
        updatedFields.images=req.files.map(image => image.path)
    }
    console.log(req.body)
        details ? details= JSON.parse(details): ''
    try {
        const editedProduct = await Product.findByIdAndUpdate(id,updatedFields , { new: true });
        res.status(200).json(editedProduct)
    } 
    catch (error) {
        res.status(500).json(error.message)
    }

},

// Controller function to fetch all products
getAll: async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    }
    catch (error) {
        res.status(404).json({ status: 404, error: error.message })
    }
},

// Controller function to fetch products by category
getByCategory: async (req, res) => {
    let category = req.body.category;
    try {
        const products = await Product.find({ category: category })
        res.status(200).json(products)
    }
    catch (error) {
        res.status(404).json({ status: 404, error: error })
    }
},

// Controller function to fetch products by category and brand
getByCategoryAndBrand: async (req, res) => {
    let { category, brand } = req.body
    try {
        const products = await Product.find({ category: category, brand: brand })
        res.status(200).json(products)
    }
    catch (error) {
        res.status(404).json({ status: 404, error: error })
    }
},

// Controller function to fetch products based on various filters
getByFilter: async (req, res) => {
    try {
        const { category, brands, colors,sizes,subCategories,priceRange } = req.body
        const conditions=[]
        if (brands && brands.length > 0) {
            conditions.push({ "brand": { $in: brands } })
        }

        if (subCategories && subCategories.length > 0) {
            conditions.push({ "subCategory": { $in: subCategories } })
        }
        if (sizes && sizes.length > 0) {
            conditions.push({"details.sizes" : {$in :sizes}} )
        }
        if (colors && colors.length > 0) {
            conditions.push({ "details.color" : { $in: colors } })
        }
        if (priceRange && priceRange.length > 0) {
            const priceConditions=[]
            priceRange.forEach(range => 
                {
                if(range==1){priceConditions.push({"price": { $gt: 0,$lte:15 }})}
                if(range==2){priceConditions.push({"price": { $gt: 15,$lte:30 }})}

                if(range==3){priceConditions.push({"price": { $gt: 30,$lte:45 }})}

                if(range==4){priceConditions.push({"price": { $gt: 45 }})}

            })
            conditions.push({$or:priceConditions})     
        }
        
        const products = await Product.find({
            "category": category,
            $and:conditions
        })

        res.status(200).json(products)
}
    catch (error) {
        res.status(404).json({ status: 400, error: error.message })
    }
},
}
