const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const getChitietGiaoDichSchema = new Schema({
    id: { type: ObjectId },
    userid: { type: String, require: true },
    Productid: { type: String, require: true },
    role: { type: String, require: true },
});

module.exports = mongoose.model.getChitietGiaoDich || mongoose.model('ChitietGiaoDich', getChitietGiaoDichSchema);