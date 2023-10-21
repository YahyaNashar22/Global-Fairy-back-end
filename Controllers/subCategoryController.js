import SubCategory from '../models/subCategoryModel.js'; // Import the 'SubCategory' model.

const createSubCategory = async (req, res) => {
try {
    const { name, category } = req.body;
    const subCategory = new SubCategory({ name, category });
    const savedSubCategory = await subCategory.save();

    res.status(201).json(savedSubCategory);
} catch (error) {
    res.status(500).json({ message: 'SubCategory creation failed', error: error.message });
}
};

export default createSubCategory;