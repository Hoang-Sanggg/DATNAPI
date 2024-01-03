const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categorydetailSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true }, 
    img: { type: String, required: true},
    idCategory: {type: ObjectId, ref: 'category'},

});

module.exports = mongoose.model.categorydetail || mongoose.model('categorydetail', categorydetailSchema);