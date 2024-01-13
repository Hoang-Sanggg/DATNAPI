const inforServices = require('../services/InforServices');

 const getInfor = async (req, res, next) => {
    const infor = await inforServices.getInfor();
    res.json({success: true, infor: infor});
 }
module.exports = {
   getInfor
}
