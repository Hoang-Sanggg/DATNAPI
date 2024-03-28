const transactionService = require('../services/TransactionService');
const userService = require('../services/userService')
const createTransactionHistory = async (req, res) => {
    try {
        const transactionHistory = await transactionService.createTransactionHistory(req.body);
        res.status(201).json(transactionHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllTransactionHistories = async (req, res) => {
    try {
        const transactionHistories = await transactionService.getAllTransactionHistories();
        res.json(transactionHistories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTransactionHistoryById = async (req, res) => {
    try {
        const transactionHistory = await transactionService.getTransactionHistoryById(req.query.id);
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
        const updatedTransactionHistory = await transactionService.updateTransactionHistory(req.query.id, req.body);
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
        const transactionHistory = await transactionService.deleteTransactionHistory(req.query.id);
        if (!transactionHistory) {
            return res.status(404).json({ message: 'Transaction history not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const buyVipPosts = async (req, res, next) => {
    try {
        const { amount, userId, postsId } = req.body
        const paid = true;
        const description = {
            content: `Mua vip ${amount / 3000} ngày với giá ${amount} vnd`
        }
        const data = { amount, description, userId, paid, postsId }
        console.log("check data buy vip posts: ", data)
        const newVipPosts = await transactionService.buyVipPosts(data)
        if (newVipPosts) {
            return res.status(200).json({ result: true, message: "transaction buy vip posts successfully" });
        }
        return res.status(400).json({ result: false, message: "transaction buy vip posts unsuccessfully" });
    } catch (error) {
        console.log("error buy vip posts: ", error)
        return res.status(500).json({ result: false, message: "error buy vip posts" });
    }
}

const getVipPostsTransactions = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const data = await transactionService.getVipPostsTransactions(userId)
        if (data) {
            return res.status(200).json({ result: true, message: "get vip posts transactions successfully", data: data });
        }
        return res.status(400).json({ result: false, message: "get vip posts transactions unsuccessfully" });

    } catch (error) {
        console.log("error get vip posts transactions: ", error)
        return res.status(500).json({ result: false, message: "error get vip posts transaction" });
    }
}

const getByIdTransaction = async (req, res, next) => {
    try {
        const { id } = req.params
        const transaction = await transactionService.getByIdTransaction(id);
        if (transaction) {
            return res.status(200).json({ result: true, message: "get by id transaction successfully", data: transaction });
        }
        return res.status(400).json({ result: false, message: "get by id transaction unsuccessfully" });

    } catch (error) {
        console.log("get by id transaction error: ", error)
        return res.status(500).json({ result: false, message: "error get by id transaction" });
    }
}

const getRechargeTransaction = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const data = await transactionService.getRechargeTransaction(userId)
        if (data) {
            return res.status(200).json({ result: true, message: "get vip posts transactions successfully", data: data });
        }
        return res.status(400).json({ result: false, message: "get vip posts transactions unsuccessfully" });

    } catch (error) {
        console.log("error get vip posts transactions: ", error)
        return res.status(500).json({ result: false, message: "error get vip posts transaction" });
    }
}

const updatePaidTransaction = async (req, res, next) => {
    try {
        const { clientSecret } = req.params;
        const data = await transactionService.updatePaidTransaction(clientSecret)
        if (data) {
            const updatedBalance = await userService.rechargeBalance(data.userId, data.amount)
            return res.status(200).json({ result: true, message: "update paid transactions successfully" });
        }
        return res.status(400).json({ result: false, message: "update paid transactions unsuccessfully" });

    } catch (error) {
        console.log("error get vip posts transactions: ", error)
        return res.status(500).json({ result: false, message: "error get vip posts transaction" });
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
    updatePaidTransaction
};