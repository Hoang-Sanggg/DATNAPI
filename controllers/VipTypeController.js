const VipTypeService = require('../services/VipTypeService');

const getAllVipTypes = async (req, res) => {
    try {
        const vipTypes = await VipTypeService.getVipTypes();
        res.json(vipTypes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getVipType = async (req, res) => {
    try {
        const vipType = await VipTypeService.getVipTypeById(req.query.id);
        if (!vipType) {
            return res.status(404).send('VipType not found');
        }
        res.json(vipType);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createVipType = async (req, res) => {
    try {
        const newVipType = await VipTypeService.createVipType(req.body);
        return res.status(200).json({ result: true, message: "Create viptype succesfully", newVipType });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateVipType = async (req, res) => {
    try {
        const updatedVipType = await VipTypeService.updateVipType(req.query.id, req.body);
        res.json(updatedVipType);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteVipType = async (req, res) => {
    try {
        await VipTypeService.deleteVipType(req.query.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllVipTypes,
    getVipType,
    createVipType,
    updateVipType,
    deleteVipType
};
