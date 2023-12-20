const testService = require('../services/testService')


const getAllTest = async (req, res, next) => {
    try {
        const test = await testService.getAllTest();
        if (test) {
            return res.status(200).json({ result: true, message: 'GetAll Succesful', test: test })
        }
        return res.status(400).json({ result: false, message: 'GetAll null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getAll' })
    }
}

const addTest = async (req, res, next) => {
    try {
        const { userName, old } = req.body;
        console.log("check data : ", req.body);
        const test = testService.addTest(userName, old);
        if (test) {
            return res.status(200).json({ result: true, message: 'Add Succesful' })
        }
        return res.status(400).json({ result: false, message: 'Add null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error Add' })
    }
}


module.exports = {
    getAllTest, addTest
}