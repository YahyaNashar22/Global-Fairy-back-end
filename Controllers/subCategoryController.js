import SubCategory from '../models/subCategoryModel.js'; // Import the 'SubCategory' model.

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

export const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch sub-categories', error: error.message });
    }
};
