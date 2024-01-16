const transactionHistoryService = require('../services/TransactionHistoryService');

const createTransaction = async (req, res) => {
  try {
    const transaction = await transactionHistoryService.createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await transactionHistoryService.getTransactionById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'TransactionHistory not found' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionHistoryService.getAllTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await transactionHistoryService.updateTransaction(req.params.id, req.body);
    if (!updatedTransaction) {
      return res.status(404).json({ message: 'TransactionHistory not found' });
    }
    res.json(updatedTransaction);
  } catch (error) {
    res.status
(500).json({ message: error.message });
}
};

const deleteTransaction = async (req, res) => {
try {
await transactionHistoryService.deleteTransaction(req.params.id);
res.status(200).json({ message: 'TransactionHistory deleted' });
} catch (error) {
res.status(500).json({ message: error.message });
}
};

module.exports = {
createTransaction,
getTransactionById,
getAllTransactions,
updateTransaction,
deleteTransaction
};