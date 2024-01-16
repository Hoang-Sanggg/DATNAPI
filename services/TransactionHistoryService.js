const TransactionHistoryModel = require('../models/TransactionHistory');

const createTransaction = async (transactionData) => {
  const transaction = new TransactionHistoryModel(transactionData);
  await transaction.save();
  return transaction;
};

const getTransactionById = async (id) => {
  return await TransactionHistoryModel.findById(id).populate('userId').populate('vipuId');
};

const getAllTransactions = async () => {
  return await TransactionHistoryModel.find().populate('userId').populate('vipuId');
};

const updateTransaction = async (id, transactionData) => {
  return await TransactionHistoryModel.findByIdAndUpdate(id, transactionData, { new: true });
};

const deleteTransaction = async (id) => {
  return await TransactionHistoryModel.findByIdAndDelete(id);
};

module.exports = {
  createTransaction,
  getTransactionById,
  getAllTransactions,
  updateTransaction,
  deleteTransaction
};
