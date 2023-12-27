const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const detailSchema = new Schema({
    id: { type: ObjectId },
    Productid: { type: ObjectId, ref: 'product' },
    gioHangid: { type: ObjectId, ref: 'cart' },
});

module.exports = mongoose.model.detail || mongoose.model('detail', detailSchema);
