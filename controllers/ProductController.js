const productService = require('../services/ProductService')

const getProduct = async (req, res, next) => {
    try {
        const product = await productService.getProduct();
        if (product) {
            return res.status(200).json({ result: true, message: 'getProduct Succesful', product: product })
        }
        return res.status(400).json({ result: false, message: 'getProduct null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getProduct' })
    }
}

module.exports ={
    getProduct
}