const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const TransactionHistorySchema = new mongoose.Schema({
  id: { type: ObjectId },
  create_at: { type: String, required: true },
  description: { type: String, required: true },
  vipuId: { type: ObjectId, ref: "vip" },
  userId: { type: ObjectId, ref: "user" }
});

module.exports = mongoose.model.TransactionHistory || mongoose.model('TransactionHistory', TransactionHistorySchema);
