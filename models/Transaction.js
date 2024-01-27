const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const TransactionHistorySchema = new mongoose.Schema({
  id: { type: ObjectId },
  amount: { type: Number, required: true, default: 0 },
  description: { type: String, required: true },
  userId: { type: ObjectId, ref: "user" },
  createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model.TransactionHistory || mongoose.model('Transactions', TransactionHistorySchema);
