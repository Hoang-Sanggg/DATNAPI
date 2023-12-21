const historyService = require('../services/historyService');

const getAllHistory = async (req, res, next) => {
    try {
        const historyRecords = await historyService.getAllHistory();
        return res.status(200).json({ result: true, message: 'GetAll History Successful', historyRecords: historyRecords });
    } catch (error) {
        console.error('Error in getAllHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in getAllHistory' });
    }
};

const addHistory = async (req, res, next) => {
    try {
        const historyData = req.body;
        const newHistoryRecord = await historyService.addHistory(historyData);
        return res.status(200).json({ result: true, message: 'Add History Successful', historyRecord: newHistoryRecord });
    } catch (error) {
        console.error('Error in addHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in addHistory' });
    }
};

const updateHistory = async (req, res, next) => {
    try {
        const historyId = req.params.historyId;
        const updatedHistoryData = req.body;
        const updatedHistoryRecord = await historyService.updateHistory(historyId, updatedHistoryData);
        return res.status(200).json({ result: true, message: 'Update History Successful', historyRecord: updatedHistoryRecord });
    } catch (error) {
        console.error('Error in updateHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in updateHistory' });
    }
};

const deleteHistory = async (req, res, next) => {
    try {
        const historyId = req.params.historyId;
        const deletedHistoryRecord = await historyService.deleteHistory(historyId);
        return res.status(200).json({ result: true, message: 'Delete History Successful', historyRecord: deletedHistoryRecord });
    } catch (error) {
        console.error('Error in deleteHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in deleteHistory' });
    }
};

module.exports = {
    getAllHistory,addHistory,updateHistory,deleteHistory
};
