const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const VipSchema = new mongoose.Schema({
  id: { type: ObjectId },
  createAT: { type: Date, required: false },
  start: { type: Date, required: false },
  end: { type: Date, required: false },
  userId: { type: ObjectId, ref: "user" },
  vipTypeId: { type: ObjectId, ref: "vipType" }
});

module.exports = mongoose.model.vip || mongoose.model('vip', VipSchema);
