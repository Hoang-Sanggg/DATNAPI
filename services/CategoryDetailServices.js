const categoryDetailModel = require('../models/CategoriesDetailModels');

const getCategoryDetail = async () => {
    const categoryDetail = await categoryDetailModel.find();
    return categoryDetail
}

// //add
const addCategoryDetail = async (categoryDetailData) => {
    try {
        const newCategoryDetailData = new categoryDetailModel(categoryDetailData);
        const saveCategoryDetailData = await newCategoryDetailData.save();
        return saveCategoryDetailData;
    } catch (error) {
        return false;
    }
};

//delete
const deleteCategoryDetail = async (id) => {
    try {
        const categoryadlDelete = await categoryDetailModel.findById(id);

        if (!categoryadlDelete) {
            throw new Error('Không tìm thấy');
        }
        // kiểm tra khóa ngoại iproduct có thì không xóa >>
        if (categoryadlDelete.idCategory) {
            throw new Error('Không thể xóa khi có idCategory');
        }
        const deleteCategoryDetail = await categoryDetailModel.findByIdAndDelete(id);
        return deleteCategoryDetail;
    } catch (error) {
        return false;
    }
};

// edit
const updateCategoryDetails = async (id, name,img) => {
    try {
        const updateCategoryDetails = await categoryDetailModel.findByIdAndUpdate(id, { name,img }, { new: true });
        return updateCategoryDetails;
    } catch (error) {
        return false;
    }
};


module.exports = {
    getCategoryDetail,addCategoryDetail,updateCategoryDetails,deleteCategoryDetail
}