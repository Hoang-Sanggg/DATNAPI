const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Infor = new Schema({
    id: { type: ObjectId },
    idProduct: { type: ObjectId, ref: 'product'}
});

module.exports = mongoose.model.Infor || mongoose.model('Infor', Infor);