const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const detailSchema = new Schema({
    id: { type: ObjectId },
    Productid: { type: String, require: true },
    gioHangid: { type: String, require: true },
}); 

module.exports = mongoose.model.detail || mongoose.model('detail', detailSchema);