const categoryService = require('../services/CategoryServices');

const getCategory = async (res) => {
    try {
        const category = await categoryService.getCategory();
        if (category) {
            return res.status(200).json({ result: true, message: 'getCategory Successful', data: category });
        }
        return res.status(400).json({ result: false, message: 'null' });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getCategory' });
    }
};

const addCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        const savedCategory = await categoryService.addCategories(categoryData);
        res.status(200).json({ result: true, message: 'Category added successfully', data: savedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error adding Category' });
    }
};

const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name,img} = req.body;
        const updatedCategory = await categoryService.updateCategory(id, name, img);
        if (updatedCategory) {
            return res.status(200).json({ result: true, message: 'Update Category Successful', data: updatedCategory });
        }
        return res.status(400).json({ result: false, message: 'null' })
    } catch (error) {
        console.error('Error updating Category:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating Category' });
    }
};
const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteCategory = await categoryService.deleteCategory(id);

        if (deleteCategory) {
            return res.status(200).json({ result: true, message: 'Delete Category Successful' });
        }
        return res.status(400).json({ result: false, message: 'getMessage null' })
    } catch (error) {
        console.error('Error deleting Category:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting Category' });
    }
};

module.exports = {
    getCategory,addCategory,updateCategory,deleteCategory
};