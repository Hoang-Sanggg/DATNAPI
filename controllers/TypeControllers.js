const typeService = require('../services/TypeServices');

const getType = async (res) => {
    try {
        const type = await typeService.getType();
        if (type) {
            return res.status(200).json({ result: true, message: 'getType Successful', data: type });
        }
        return res.status(400).json({ result: false, message: 'null' });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getType' });
    }
};
//add
const addType = async (req, res) => {
    try {
        const typeData = req.body;
        const saveType = await typeService.addType(typeData);
        res.status(200).json({ result: true, message: 'Type added successfully', data: saveType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error adding Type' });
    }
};
//edit
const updateType = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nameType,description } = req.body;
        const updateType = await typeService.updateType(id,nameType,description);
        if (updateType) {
            return res.status(200).json({ result: true, message: 'Update Type Successful', data: updateType });
        }
        return res.status(400).json({ result: false, message: 'Type null' })
    } catch (error) {
        console.error('Error updating Type:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating Type' });
    }
};

//delete
const deleteType = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteTypes = await typeService.deleteType(id);

        if (deleteTypes) {
            return res.status(200).json({ result: true, message: 'Delete Type Successful' });
        }
        return res.status(400).json({ result: false, message: 'Type not found for delete' });
    } catch (error) {
        console.error('Error deleting Type:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting Type' });
    }
};



module.exports = {
    getType, addType,updateType,deleteType
};