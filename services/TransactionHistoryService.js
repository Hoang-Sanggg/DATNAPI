const TransactionHistoryModel = require('../models/TransactionHistory');

const createTransactionHistory = async (data) => {
  const transactionHistory = new TransactionHistory(data);
  return transactionHistory.save();
};

const getAllTransactionHistories = async () => {
  return TransactionHistory.find();
};

const getTransactionHistoryById = async (id) => {
  return TransactionHistory.findById(id);
};

const updateTransactionHistory = async (id, updateData) => {
  return TransactionHistory.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteTransactionHistory = async (id) => {
  return TransactionHistory.findByIdAndDelete(id);
};

module.exports = {
  createTransactionHistory,
  getAllTransactionHistories,
  getTransactionHistoryById,
  updateTransactionHistory,
  deleteTransactionHistory
};
