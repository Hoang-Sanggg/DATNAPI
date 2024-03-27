const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const TransactionHistorySchema = new mongoose.Schema({
  id: { type: ObjectId },
  amount: { type: Number, required: true, },
  description: { type: Object, required: true },
  userId: { type: ObjectId, ref: "user" },
  postsId: { type: ObjectId, ref: "postnew" },
  paid: { type: Boolean, required: true },
  createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model.TransactionHistory || mongoose.model('Transactions', TransactionHistorySchema);
