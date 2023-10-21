import Brand from '../models/brandModel.js';

const createBrand = async(req, res) => {
try {
    const { name, categories } = req.body;
    const brand = new Brand({ name, categories });
    const savedBrand = await brand.save();
    res.status(201).json(savedBrand);
} catch (error) {
    res.status(500).json({ message: 'Brand creation failed', error: error });
}
};

export default createBrand;