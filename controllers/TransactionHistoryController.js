const transactionHistoryService = require('../services/TransactionHistoryService');

const createTransactionHistory = async (req, res) => {
    try {
        const transactionHistory = await transactionHistoryService.createTransactionHistory(req.body);
        res.status(201).json(transactionHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllTransactionHistories = async (req, res) => {
    try {
        const transactionHistories = await transactionHistoryService.getAllTransactionHistories();
        res.json(transactionHistories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTransactionHistoryById = async (req, res) => {
    try {
        const transactionHistory = await transactionHistoryService.getTransactionHistoryById(req.query.id);
        if (!transactionHistory) {
            return res.status(404).json({ message: 'Transaction history not found' });
        }
        res.json(transactionHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTransactionHistory = async (req, res) => {
    try {
        const updatedTransactionHistory = await transactionHistoryService.updateTransactionHistory(req.query.id, req.body);
        if (!updatedTransactionHistory) {
            return res.status(404).json({ message: 'Transaction history not found' });
        }
        res.json(updatedTransactionHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTransactionHistory = async (req, res) => {
    try {
        const transactionHistory = await transactionHistoryService.deleteTransactionHistory(req.query.id);
        if (!transactionHistory) {
            return res.status(404).json({ message: 'Transaction history not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTransactionHistory,
    getAllTransactionHistories,
    getTransactionHistoryById,
    updateTransactionHistory,
    deleteTransactionHistory
};