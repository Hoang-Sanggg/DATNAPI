const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productdetailSchema = new Schema({
    id: { type: ObjectId },
    row: { type: String, require: true },
    idProduct: {type: ObjectId, ref: 'product'},
    idTypee: {type: ObjectId, ref: 'typee'},

});

module.exports = mongoose.model.productdetail || mongoose.model('productdetail', productdetailSchema);