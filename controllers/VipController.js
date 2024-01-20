const vipService = require('../services/VipService');

// tạo vip
const createVip = async (req, res) => {
  try {
    const vip = await vipService.createVip(req.body);
    res.status(201).json(vip);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.json(vips);
  } catch (error) {
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