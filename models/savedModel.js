const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const savedSchema = new mongoose.Schema({
    id: { type: ObjectId },
    userId: { type: ObjectId, ref: "user" },
    postId: { type: ObjectId, ref: "postnew" },
    createAT: { type: Date, default: Date.now }
});

module.exports = mongoose.model.saved || mongoose.model('saved', savedSchema);
