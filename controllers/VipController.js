const vipService = require('../services/VipService');
const moment = require('moment');

// tạo vip
const createVip = async (req, res) => {
  try {
    const { userId, vipTypeId, postsId } = req.body
    const start = moment();
    let numberOfDays = 3;
    if (vipTypeId == "65e7f8cb8c7aafc04e660219") numberOfDays = 3;
    if (vipTypeId == "65e7f9b8189e46f83d9b67b2") numberOfDays = 7;
    if (vipTypeId == "65e7f9c6189e46f83d9b67b4") numberOfDays = 30;
    const end = moment().add(numberOfDays, "days")
    const dataVip = { start, end, userId, vipTypeId, postsId }

    const vip = await vipService.createVip(dataVip);
    res.status(201).json(dataVip);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "error create vip" });
  }
};

// lấy vip theo id
const getVipById = async (req, res) => {
  try {
    const vip = await vipService.getVipById(req.query.id);
    if (!vip) {
      return res.status(404).json({ message: 'Vip not found' });
    }
    res.json(vip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// lấy tất cả vip
const getAllVips = async (req, res) => {
  try {
    const vips = await vipService.getAllVips();
    res.status(200).json({ result: true, message: "get all vip successfully", data: vips });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};

// cập nhật vip
const updateVip = async (req, res) => {
  try {
    const updatedVip = await vipService.updateVip(req.query.id, req.body);
    if (!updatedVip) {
      return res.status(404).json({ message: 'Vip not found' });
    }
    res.json(updatedVip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//xóa vip
const deleteVip = async (req, res) => {
  try {
    await vipService.deleteVip(req.query.id);
    res.status(200).json({ message: 'Vip deleted' });
  } catch (error) {
    res.status(500).
      json({ message: error.message });
  }
};

module.exports = {
  createVip,
  getVipById,
  getAllVips,
  updateVip,
  deleteVip
};