import SubCategory from '../Models/subCategoryModel.js'; // Import the 'SubCategory' model.

// Controller function to create a new subCategory
export const createSubCategory = async (req, res) => {
try {
    const { name, category } = req.body;
    const subCategory = new SubCategory({ name, category });
    const savedSubCategory = await subCategory.save();

    res.status(201).json(savedSubCategory);
} catch (error) {
    res.status(500).json({ message: 'SubCategory creation failed', error: error.message });
}
};

// Controller function to fetch all subCategories
export const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch sub-categories', error: error.message });
    }
};

// Controller function to delete a subCategory
export const deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedSubC = await SubCategory.findByIdAndDelete(id);

        if (!deletedSubC) {
        return res.status(404).json({ message: 'Sub-category not found' });
        }

        res.status(200).json({ message: 'Sub-category deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Failed to delete sub-category', error: error.message });
}
};

// Controller function to fetch a subCategory
export const getSubCategory = async (req, res) => {
    const {id}=req.body
    try {
        const subCategory = await SubCategory.findById(id);
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch sub-categories', error: error.message });
    }
};

// get the subcategories names for  a categor
export const getSubForCat= async (req, res) => {
    const {categoryId}=req.body
    try {
        const subCategories = await SubCategory.find({category:categoryId});
        const subCat = subCategories.map(subC => subC.name)

        res.status(200).json(subCat);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch sub-categories for this category', error: error.message });
    }
};
