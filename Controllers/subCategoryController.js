import SubCategory from '../Models/subCategoryModel.js'; // Import the 'SubCategory' model.

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

// getAllSubCategories

export const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch sub-categories', error: error.message });
    }
};

// deleteSubCategory

export const deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSubC = await SubCategory.findByIdAndDelete(id);

        if (!deletedSubC) {
        return res.status(404).json({ message: 'Sub-category not found' });
        }

        res.status(200).json({ message: 'Sub-category deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Failed to delete sub-category', error: error.message });
}
};