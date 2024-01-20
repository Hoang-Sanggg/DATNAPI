const inforServices = require('../services/InforServices');

const getInfor = async (req, res, next) => {
   const infor = await inforServices.getInfor();
   res.json({ success: true, infor: infor });
}

const addInfor = async (req, res, next) => {
   try {
      const data = req.body;
      const infor = await inforServices.addInfor(data);
      if (infor) {
         return res.status(200).json({ result: true, message: 'addInfor Succesful', infor: infor });
      }
      return res.status(400).json({ result: false, message: 'addInfor null' });
   }
   catch (error) {
      res.json({ success: false, message: error.message });
   }
}

const DeleteInfor = async (req, res, next) => {
   try {
      const { id } = req.params;
      const infor = await inforServices.DeleteInfor(id);
      if (infor) {
         return res.status(200).json({ result: true, message: 'DeleteInfor Succesful', infor: infor });
      }
      return res.status(400).json({ result: false, message: 'DeleteInfor null' });
   }
   catch (error) {
      res.json({ success: false, message: error.message });
   }
}

const UpdateInfor = async (req, res, next) => {
   try {
      const { id } = req.params;
      const created_at = Date.now();
      const { postnewID, userid } = req.body;
      const infor = await inforServices.UpdateInfor(id, postnewID, created_at, userid);
      if (infor) {
         return res.status(200).json({ result: true, message: 'UpdateInfor Succesful', infor: infor });
      }
      return res.status(400).json({ result: false, message: 'UpdateInfor null' });
   }
   catch (error) {
      res.json({ success: false, message: error.message });
   }
}

module.exports = {
   getInfor,
   addInfor,
   DeleteInfor,
   UpdateInfor
}
