const TransactionModel = require('../models/Transaction');

const createTransactionHistory = async (data) => {
  const transactionHistory = new TransactionModel(data);
  return transactionHistory.save();
};

const getAllTransactionHistories = async () => {
  return TransactionModel.find();
};

const getTransactionHistoryById = async (id) => {
  return TransactionModel.findById(id);
};

const updateTransactionHistory = async (id, updateData) => {
  return TransactionModel.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteTransactionHistory = async (id) => {
  return TransactionModel.findByIdAndDelete(id);
};

module.exports = {
  createTransactionHistory,
  getAllTransactionHistories,
  getTransactionHistoryById,
  updateTransactionHistory,
  deleteTransactionHistory
};
