const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const detailCartSchema = new Schema({
    id: { type: ObjectId },
    Productid: { type: ObjectId, ref: 'product' },
    gioHangid: { type: ObjectId, ref: 'cart' },
},
    {
        versionKey: false,
    },
);

module.exports = mongoose.model.detailCart || mongoose.model('detailCart', detailCartSchema);
