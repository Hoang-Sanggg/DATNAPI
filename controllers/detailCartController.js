const detailCartService = require('../services/detailCartServices');

const getDetailCart = async (req, res, next) => {
    try {
        const detailCart = await detailCartService.getDetailCart();
        if (detailCart) {
            return res.status(200).json({ result: true, message: 'getDetailCart Succesful', detailCart: detailCart })
        }
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getDetailCart' })
    }
}
const addDetailCart = async (req, res, next) => {
    try {
        const { Productid, gioHangid } = req.body;

        const data = { Productid, gioHangid };

        await detailCartService.addDetailCart(data);

        if (data) {
            console.log('>>>>>>>>>>>>>>>>>> 22 addDetailCart', data);
            return res.status(200).json({ result: true, message: 'addDetailCart Successful', detailCart: data });
        } else {
            return res.status(500).json({ result: false, message: 'Error addDetailCart: Unable to add detailCart' });
        }
    } catch (error) {
        console.error('Error in addDetailCart route:', error);
        return res.status(500).json({ result: false, message: ' >>>>>>>>>>>>>>>>>>>. 26 Error addDetailCart' });
    }
};

const DeleteDetailCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const detailCart = await detailCartService.DeleteDetailCart(id);
        if (detailCart) {
            return res.status(200).json({ result: true, message: 'DeleteDetailCart Succesful', detailCart: detailCart })
        }
        return res.status(400).json({ result: false, message: 'DeleteDetailCart null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error DeleteDetailCart' })
    }
}
const UpdateDetailCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { Productid, gioHangid } = req.body;
        const detailCart = await detailCartService.UpdateDetailCart(id, Productid, gioHangid);
        if (detailCart) {
            return res.status(200).json({ result: true, message: 'UpdateDetailCart Succesful', detailCart: detailCart })
        }
        return res.status(400).json({ result: false, message: 'UpdateDetailCart null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error UpdateDetailCart' })
    }
}
const getDetailCartById = async (req, res, next) => {
    try {
        const { Productid } = req.params;
        const detailCart = await detailCartModel.findOne({ Productid });
        if (detailCart) {
            return res.status(200).json({ result: true, message: 'getDetailCartById Succesful', detailCart: detailCart })
        }
        return res.status(400).json({ result: false, message: 'getDetailCartById null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getDetailCartById' })
    }
}
module.exports = {
    getDetailCart, addDetailCart, DeleteDetailCart, UpdateDetailCart, getDetailCartById
}