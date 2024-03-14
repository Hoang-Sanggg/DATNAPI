const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const VipSchema = new mongoose.Schema({
  id: { type: ObjectId },
  createAT: { type: Date, default: Date.now },
  start: { type: Date },
  end: { type: Date },
  userId: { type: ObjectId, ref: "user" },
  vipTypeId: { type: ObjectId, ref: "vipType" },
  // postsId: { type: ObjectId, ref: "postnew" },
});

module.exports = mongoose.model.vip || mongoose.model('vip', VipSchema);
