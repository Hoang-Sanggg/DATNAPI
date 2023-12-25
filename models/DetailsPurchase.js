const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const getDetailsPurchaseSchema = new Schema({
    id: { type: ObjectId },
    userid: { type: ObjectId, ref: 'User' },
    Productid: { type: ObjectId, ref: 'Product' },
    role: { type: String, require: true },
});

module.exports = mongoose.model.getDetailsPurchase || mongoose.model('DetailsPurchase', getDetailsPurchaseSchema);
