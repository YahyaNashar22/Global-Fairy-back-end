import Brand from '../models/brandModel.js';

export const createBrand = async(req, res) => {
try {
    const { name, categories } = req.body;
    const brand = new Brand({ name, categories });
    const savedBrand = await brand.save();
    res.status(201).json(savedBrand);
} catch (error) {
    res.status(500).json({ message: 'Brand creation failed', error: error });
}
};

// getAllBrands
const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch brands' });
    }
    };
