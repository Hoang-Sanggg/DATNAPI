const categoryDetailtService = require('../services/CategoryDetailServices')

const getCategorydetail = async (req, res, next) => {
    try {
        const categorydetail = await categoryDetailtService.getCategoryDetail();
        if (categorydetail) {
            return res.status(200).json({ result: true, message: 'getcategorydetail Succesful', data: categorydetail })
        }
        return res.status(400).json({ result: false, message: 'getcategorydetail null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getcategorydetail' })
    }
}

//add
const addCategoryDetail = async (req, res) => {
    try {
        const categoryDetailData = req.body;
        const saveCategoryDetail = await categoryDetailtService.addCategoryDetail(categoryDetailData);
        res.status(200).json({ result: true, message: 'Save Categorydetail successfully', data: saveCategoryDetail });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error savedProductDetail Categorydetail' });
    }
};

//delete
const deleteCategoryDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteCategoryDetail = await categoryDetailtService.deleteCategoryDetail(id);
        if (deleteCategoryDetail) {
            return res.status(200).json({ result: true, message: 'Delete Categorydetail Successful' });
        }
    } catch (error) {
        console.error('Error deleting Categorydetail:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting Categorydetail' });
    }
};

//edit
const updateCategoryDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, img,  } = req.body;
        const updateCategoryDetails = await categoryDetailtService.updateCategoryDetails(id,name,img);
        if (updateCategoryDetails) {
            return res.status(200).json({ result: true, message: 'Update Ads Categorydetail', data: updateCategoryDetails });
        }
    } catch (error) {
        console.error('Error updating Categorydetail:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating Categorydetail' });
    }
};


module.exports = {
    getCategorydetail,addCategoryDetail,updateCategoryDetail,deleteCategoryDetail
}