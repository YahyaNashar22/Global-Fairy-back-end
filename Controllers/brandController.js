import Brand from '../Models/brandModel.js';

// Controller function for creating a new brand
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

// Controller function for fetching all brands
 const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find().populate('categories');
        res.status(200).json(brands);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch brands' });
    }
};

// Controller function for fetching a brand
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
const getBrandByName=async(req,res)=>{
    const {name}=req.body
    try {
        const brand = await Brand.findOne({name:name}).populate('categories');
        res.status(200).json(brand);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch brands' });
    }

}
// Controller function to delete a brand
const deleteBrand = async(req, res) => {
    try {
        const brandId = req.body.id;
        const deletedBrand = await Brand.findByIdAndRemove(brandId);
        if (!deletedBrand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.status(200).json(deletedBrand);
    } catch (error) {
        res.status(500).json({ message: 'Brand deletion failed' });
    }
};

 // Controller function to get the categories name of the brand
 const getBrandCategories = async (req, res) => {
    const id = req.body.id
    try {
        const brand = await Brand.findById(id).populate("categories")
        const BrandCategories = brand.categories.map(category => category.name)
        res.status(200).json(BrandCategories)
    }
    catch (error) {
        res.status(404).json(error.message)
    }
}
// Controller function to get the brands names that have a specific category
const categoryBrands=async(req,res)=>{
   const categoryId=req.body.id
    try {
        const brands = await Brand.find({"categories":categoryId}).populate("categories")
        const categoryBrands = brands.map(brand => brand.name)
        res.status(200).json(categoryBrands)
    }
    catch (error) {
        res.status(404).json(error.message)
    }
}

export { deleteBrand, getAllBrands, createBrand, getBrand, getBrandCategories ,categoryBrands,getBrandByName} 