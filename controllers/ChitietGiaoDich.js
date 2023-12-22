const ChitietGiaoDichServices = require('../services/ChitietGiaoDich');

const getChitietGiaoDich = async (req, res, next) => {
    try {
        const ChitietGiaoDich = await ChitietGiaoDichServices.getChitietGiaoDich();
        if (ChitietGiaoDich) {
            return res.status(200).json({ result: true, message: 'getChitietGiaoDich Succesful', ChitietGiaoDich: ChitietGiaoDich })
        }
        return res.status(400).json({ result: false, message: 'getChitietGiaoDich null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getChitietGiaoDich' })
    }
}
const addChitietGiaoDich = async (req, res, next) => {
    try {
        const { userid, Productid, role } = req.body;
        const ChitietGiaoDich = await ChitietGiaoDichServices.addChitietGiaoDich(userid, Productid, role);
        if (ChitietGiaoDich) {
            return res.status(200).json({ result: true, message: 'addChitietGiaoDich Succesful', ChitietGiaoDich: ChitietGiaoDich })
        }
        return res.status(400).json({ result: false, message: 'addChitietGiaoDich null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error addChitietGiaoDich' })
    }
}
const DeleteChitietGiaoDich = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ChitietGiaoDich = await ChitietGiaoDichServices.DeleteChitietGiaoDich(id);
        if (ChitietGiaoDich) {
            return res.status(200).json({ result: true, message: 'DeleteChitietGiaoDich Succesful', ChitietGiaoDich: ChitietGiaoDich })
        }
        return res.status(400).json({ result: false, message: 'DeleteChitietGiaoDich null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error DeleteChitietGiaoDich' })
    }
}
const UpdateChitietGiaoDich = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userid, Productid, role } = req.body;
        const ChitietGiaoDich = await ChitietGiaoDichServices.UpdateChitietGiaoDich(id, userid, Productid, role);
        if (ChitietGiaoDich) {
            return res.status(200).json({ result: true, message: 'UpdateChitietGiaoDich Succesful', ChitietGiaoDich: ChitietGiaoDich })
        }
        return res.status(400).json({ result: false, message: 'UpdateChitietGiaoDich null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error UpdateChitietGiaoDich' })
    }
}
module.exports = {
    getChitietGiaoDich,
    addChitietGiaoDich,
    DeleteChitietGiaoDich,
    UpdateChitietGiaoDich
}