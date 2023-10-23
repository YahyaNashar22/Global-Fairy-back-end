import Category from "../Models/CategoryModel.js";
export const CategoryController ={
     
    addCategory: async (req,res) => {
        try{
            const category = new Category(req.body)
            await category.save()
            // const category=await Category.create(req.body)
            res.status(200).json(category)
        }
        catch (error) {
            res.status(404).json({status:404,error:error.message})

        }
    },
    deleteCategory: async (req, res) => {
        const { id } = req.body
        try {
            const deleteCategry = await Category.findByIdAndRemove(id);
            if (!deleteCategry) {
                res.status(404).json({ error: 'Category not found' })
            }
            res.status(200).json({ status: " Deleted" })

        } 
        catch (error) {
            res.status(404).json(error)
        }
    },

    getCategories: async (req, res) => {
        try {
            const Categories = Category.find()
            res.status(200).json(Categories)
        }
        catch (error) {
            res.status(404).json({ status: 404, error: error.message })
        }
    },
    getCategory:async (req,res)=>{
        const {id}=req.body
        try {
            const Category = Category.findById(id)
            res.status(200).json(Category)
        }
        catch (error) {
            res.status(404).json({ status: 400, error: error })
        }

    }

}

