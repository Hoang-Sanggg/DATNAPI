const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const getDetailsPurchaseSchema = new Schema({
    id: { type: ObjectId },
    userid: { type: ObjectId, ref: 'user' },
    Productid: { type: ObjectId, ref: 'product' },
    role: { type: String, require: true },
});

module.exports = mongoose.model.getDetailsPurchase || mongoose.model('DetailsPurchase', getDetailsPurchaseSchema);
