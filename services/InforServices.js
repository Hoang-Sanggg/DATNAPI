const inforModels = require('../models/Infor');

const getInfor = async () => {
    const infor = await inforModels.find();
    return infor;
}
const addInfor = async (data) => {
    try {
        const newInfor = new inforModels(data);
        const savedInfor = await newInfor.save();
        return savedInfor;
    }
    catch (error) {
        return false
    }
}

const DeleteInfor = async (id) => {
    try {
        const infor = await inforModels.findByIdAndDelete(id);
        return infor
    }
    catch (error) {
        return false
    }
}

const UpdateInfor = async (id, postnewID, created_at, userid) => {
    try {
        const infor = await inforModels.findByIdAndUpdate(id, { postnewID, created_at, userid });
        return infor
    }
    catch (error) {
        return false
    }
}


module.exports = {
    getInfor,
    addInfor,
    DeleteInfor,
    UpdateInfor
}