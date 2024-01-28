const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const VipTypeSchema = new mongoose.Schema({
  id: { type: ObjectId },
  name: { type: String, required: true },
  description:{ type: String, required: true },
  available: { type: Boolean, default: false }
});

module.exports = mongoose.model.vipType || mongoose.model('vipType', VipTypeSchema);
