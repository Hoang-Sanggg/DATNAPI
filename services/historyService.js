const HistoryModel = require('../models/historyModel');

// lấy all lịch sử
const getAllHistory = async () => {
    try {
        const historyRecords = await HistoryModel.find();
        return historyRecords;
    } catch (error) {
        console.error('Error in getAllHistory:', error);
        throw error;
    }
};

// thêm lịch sử
const addHistory = async (historyData) => {
    try {
        const newHistoryRecord = await HistoryModel.create(historyData);
        return newHistoryRecord;
    } catch (error) {
        console.error('Error in addHistory:', error);
        throw error;
    }
};

// sửa lịch sử
const updateHistory = async (id, updatedHistoryData) => {
    try {
        const updatedHistoryRecord = await HistoryModel.findOneAndUpdate(
            { _id: id },
            { $set: updatedHistoryData },
            { new: true } 
        );
        return updatedHistoryRecord;
    } catch (error) {
        console.error('Error in updateHistory:', error);
        throw error;
    }
};

// xóa lịch sử
const deleteHistory = async (id) => {
    try {
        const deletedHistoryRecord = await HistoryModel.findOneAndDelete({ _id: id });

        return deletedHistoryRecord;
    } catch (error) {
        console.error('Error in deleteHistory:', error);
        throw error;
    }
};

module.exports = {
    getAllHistory,addHistory,updateHistory,deleteHistory
};
