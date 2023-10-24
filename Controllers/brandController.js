import Brand from '../Models/brandModel.js';

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

// get a brand
const getBrand = async (req, res) => {
    const{id}=req.body
    try {
        const brand = await Brand.findById(id);
        res.status(200).json(brand);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch brands' });
    }
};
// deleteBrand
 const deleteBrand = async(req, res) => {
    try {
        const brandId = req.body.id;
        const deletedBrand = await Brand.findByIdAndRemove(brandId);
        if (!deletedBrand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.status(200).json(deletedBrand);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Brand deletion failed' });
    }
};

export  {deleteBrand , getAllBrands,createBrand,getBrand}