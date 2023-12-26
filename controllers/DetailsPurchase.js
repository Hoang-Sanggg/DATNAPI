const DetailsPurchaseServices = require('../services/DetailsPurchase');

const getDetailsPurchase = async (req, res, next) => {
    try {
        const DetailsPurchase = await DetailsPurchaseServices.getDetailsPurchase();
        if (DetailsPurchase) {
            return res.status(200).json({ result: true, message: 'getDetailsPurchase Succesful', DetailsPurchase: DetailsPurchase })
        }
        return res.status(400).json({ result: false, message: 'getDetailsPurchase null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getDetailsPurchase' })
    }
}
const addDetailsPurchase = async (req, res, next) => {
    try {
        const { userid, Productid, role } = req.body;
        const DetailsPurchase = await DetailsPurchaseServices.addDetailsPurchase(userid, Productid, role);
        if (DetailsPurchase) {
            return res.status(200).json({ result: true, message: 'addDetailsPurchase Succesful', DetailsPurchase: DetailsPurchase })
        }
        return res.status(400).json({ result: false, message: 'addDetailsPurchase null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error addDetailsPurchase' })
    }
}
const DeleteDetailsPurchase = async (req, res, next) => {
    try {
        const { id } = req.params;
        const DetailsPurchase = await DetailsPurchaseServices.DeleteDetailsPurchase(id);
        if (DetailsPurchase) {
            return res.status(200).json({ result: true, message: 'DeleteDetailsPurchase Succesful', DetailsPurchase: DetailsPurchase })
        }
        return res.status(400).json({ result: false, message: 'DeleteDetailsPurchase null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error DeleteDetailsPurchase' })
    }
}
const UpdateDetailsPurchase = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userid, Productid, role } = req.body;
        const DetailsPurchase = await DetailsPurchaseServices.UpdateDetailsPurchase(id, userid, Productid, role);
        if (DetailsPurchase) {
            return res.status(200).json({ result: true, message: 'UpdateDetailsPurchase Succesful', DetailsPurchase: DetailsPurchase })
        }
        return res.status(400).json({ result: false, message: 'UpdateDetailsPurchase null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error UpdateDetailsPurchase' })
    }
}
module.exports = {
    getDetailsPurchase,
    addDetailsPurchase,
    DeleteDetailsPurchase,
    UpdateDetailsPurchase
}