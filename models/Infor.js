const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Infor = new Schema({
    id: { type: ObjectId },
    postnewID: { type: ObjectId, ref: 'postnew' },
    created_at: { type: Date, default: Date.now },
    userid: { type: ObjectId, ref: 'user' },
});

module.exports = mongoose.model.Infor || mongoose.model('Infor', Infor);