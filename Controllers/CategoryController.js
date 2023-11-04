import Category from "../Models/CategoryModel.js";

export const CategoryController = {

// Controller function to add a new category
addCategory: async (req,res) => {
    try{
        const category = new Category(req.body)
        await category.save()
        res.status(200).json(category)
    }
    catch (error) {
        res.status(404).json({status:404,error:error.message})
    }
},

// Controller function to delete a category
deleteCategory: async (req, res) => {
    try {
        const { id } = req.body
        const category= await Category.findByIdAndRemove(id);
        if (!category) {
            res.status(404).json({ error: 'Category not found' })
        }
        res.status(200).json({ status: " Deleted" })

    } 
    catch (error) {
        res.status(404).json(error.message)
    }
},

// Controller function to fetch all categories
getCategories: async (req, res) => {
    try {
        const Categories = await Category.find()
        res.status(200).json(Categories)
    }
    catch (error) {
        res.status(404).json({ status: 404, error: error.message })
    }
},

// Controller function to fetch a specific category by id
getCategory:async (req,res)=> {
    const {id}=req.body
    try {
        const category = await Category.findById(id)
        res.status(200).json(category)
    }
    catch (error) {
        res.status(404).json({ status: 400, error: error.message })
    }
}
,
// Controller function to fetch a specific category by name
getCategoryByName:async (req,res)=> {
    const {name}=req.params
    try {
        const category = await Category.findOne({name:name})
        res.status(200).json(category)
    }
    catch (error) {
        res.status(404).json({ status: 400, error: error.message })
    }
}



}