const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const detailSchema = new Schema({
    id: { type: ObjectId },
    Productid: { type:ObjectId, ref: 'Product' },
    gioHangid: { type:ObjectId, ref: 'GioHang' },
}); 

module.exports = mongoose.model.detail || mongoose.model('detail', detailSchema);
