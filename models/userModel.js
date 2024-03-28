const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const avatarDefalt = 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg';

const UserSchema = new mongoose.Schema(
  {
    id: { type: ObjectId },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    name: { type: String, required: true },
    avatar: { type: String, default: avatarDefalt },
    level: { type: String, required: true, default: 0 },
    balance: { type: Number, required: true, default: 0 },
    isActivate: { type: Boolean, required: false, default: true },
    socketId: { type: String },
    createAT: { type: Date, default: Date.now }

  },
);

module.exports = mongoose.model.user || mongoose.model('user', UserSchema);
