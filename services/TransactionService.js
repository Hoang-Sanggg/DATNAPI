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

const buyVipPosts = async (data) => {
  try {
    const newVipPosts = await TransactionModel.create(data);
    console.log("check data newVipPosts: ", newVipPosts)
    return true;
  } catch (error) {
    console.log("buy vip posts services error: ", error)
    return false
  }
}

const getVipPostsTransactions = async (userId) => {
  try {
    const dataVipPosts = await TransactionModel.find({ userId: userId, postsId: { $ne: null } }).populate(['postsId']);
    return dataVipPosts
  } catch (error) {
    console.log('get vip post transactions error: ', error)
    return false;
  }
}
const getAllBuyVipTransactions = async () => {
  try {
    const dataVipPosts = await TransactionModel.find({ postsId: { $ne: null } }).populate(['postsId', 'userId']);
    return dataVipPosts
  } catch (error) {
    console.log('get vip post transactions error: ', error)
    return false;
  }
}


const getByIdTransaction = async (id) => {
  try {
    // check
    return await TransactionModel.findById(id)
  } catch (error) {
    console.log("get by id transaction services error: ", error)
    return false
  }
}



const getRechargeTransaction = async (userId) => {
  try {
    const dataRecharge = await TransactionModel.find({ userId: userId, postsId: { $eq: null } }).populate(['postsId']);
    return dataRecharge
  } catch (error) {
    console.log('get vip post transactions error: ', error)
    return false;
  }
}

const createRechargeTransaction = async (data) => {
  try {
    const newRechargePosts = await TransactionModel.create(data);
    return newRechargePosts;
  } catch (error) {
    console.log("buy vip posts services error: ", error)
    return false
  }
}

const updatePaidTransaction = async (clientSecret) => {
  try {
    const transaction = await TransactionModel.findOneAndUpdate({ 'description.clientSecret': clientSecret }, { paid: true });
    return transaction;
  } catch (error) {
    console.log("update paid transaction services error: ", error)
    return false
  }
}

module.exports = {
  createTransactionHistory,
  getAllTransactionHistories,
  getTransactionHistoryById,
  updateTransactionHistory,
  deleteTransactionHistory,
  buyVipPosts,
  getVipPostsTransactions,
  getByIdTransaction,
  getRechargeTransaction,
  createRechargeTransaction,
  updatePaidTransaction,
  getAllBuyVipTransactions
};
