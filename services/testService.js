
const testModel = require('../models/testModel');

const getAllTest = async () => {
    const test = await testModel.find();
    return test;
}

const addTest = async (userName, old) => {
    try {
        const test = { userName, old }
        await new testModel(test).save();
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    getAllTest, addTest
}