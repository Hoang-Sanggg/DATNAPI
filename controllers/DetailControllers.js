const DetailService = require('../services/DetailServices')

const getDetail = async (req, res, next) => {
    try {
        const detail = await DetailService.getDetail();
        if (detail) {
            return res.status(200).json({ result: true, message: 'getDetail Succesful', detail: detail })
        }
        return res.status(400).json({ result: false, message: 'getDetail null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getDetail' })
    }
}
const addDetail = async (req, res, next) => {
    try {

        const { Productid, gioHangid } = req.body;
        const detail = await DetailService.addDetail(Productid, gioHangid);
        if (detail) {
            return res.status(200).json({ result: true, message: 'addDetail Succesful', detail: detail })
        }
        return res.status(400).json({ result: false, message: 'addDetail null' })

    } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>> 12 ", error)
        return res.status(500).json({ result: false, message: 'Error addDetail' })
    }
}
const DeleteDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const detail = await DetailService.DeleteDetail(id);
        if (detail) {
            return res.status(200).json({ result: true, message: 'DeleteDetail Succesful', detail: detail })
        }
        return res.status(400).json({ result: false, message: 'DeleteDetail null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error DeleteDetail' })
    }
}
const UpdateDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { Productid, gioHangid } = req.body;
        const detail = await DetailService.UpdateDetail(id, Productid, gioHangid);
        if (detail) {
            return res.status(200).json({ result: true, message: 'UpdateDetail Succesful', detail: detail })
        }
        return res.status(400).json({ result: false, message: 'UpdateDetail null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error UpdateDetail' })
    }
}
const getDetailById = async (req, res, next) => {
    try {
        const { Productid } = req.params;
        const detail = await detailModel.findOne({ Productid });
        if (detail) {
            return res.status(200).json({ result: true, message: 'getDetailById Successful', detail: detail });
        }
        return res.status(400).json({ result: false, message: 'getDetailById null' });
    } catch (error) {
        console.error("Error in getDetailById:", error);
        return res.status(500).json({ result: false, message: 'Error in getDetailById' });
    }
};

module.exports = {
    getDetail,
    addDetail,
    DeleteDetail,
    UpdateDetail,
    getDetailById
}