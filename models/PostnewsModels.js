const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId },
    title: { type: String, require: true },
    status: { type: Boolean },
    detail: { type: String, require: true },
    location: { type: String, require: true },
    price: { type: Number, require: true },
    created_AT: { type: String, require: true },
    files: [{ type: String, require: true }],
    role: { type: String, require: true },
    activable: { type: Boolean },
    properties: [{ type: String }],
    userid: { type: ObjectId, ref: 'user' },
    brandid: { type: ObjectId, ref: 'brand' },
    idCategory: { type: ObjectId, ref: 'category' },
    startVip: { type: Date, default: Date.now },
    endVip: { type: Date, default: Date.now },

});

module.exports = mongoose.model.postnew || mongoose.model('postnew', productSchema);