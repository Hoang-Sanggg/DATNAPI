const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true },
    img: { type: String, required: true },
    icon: { type: String, required: true },
    avaliable: { type: Boolean, required: true},
    parentId: {type: ObjectId, ref: 'category'}
});

module.exports = mongoose.model.category || mongoose.model('category', CategorySchema);