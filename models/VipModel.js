const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const VipSchema = new mongoose.Schema({
  id: { type: ObjectId },
  create_at: { type: String, required: true },
  timeVip:{ type: String, required: true },
  userId: { type: ObjectId, ref: "user" }
});

module.exports = mongoose.model.vip || mongoose.model('vip', VipSchema);
