const inforServices = require('../models/Infor');
 
const getInfor = async () => {
    const infor = await inforServices.find();
    return infor;
}

module.exports = {
    getInfor
}