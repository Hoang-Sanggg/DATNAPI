const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const CartSchema = new mongoose.Schema({
    status: { type: Boolean, required: true },
    role: { type: String, required: true },
    userId: { type: ObjectId, required: true }
  });

module.exports = mongoose.model.cart || mongoose.model('cart', CartSchema);