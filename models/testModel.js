const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const testSchema = new Schema({
    id: { type: ObjectId },
    userName: { type: String, require: true },
    old: { type: Number, require: true },
});

module.exports = mongoose.model.test || mongoose.model('test', testSchema);