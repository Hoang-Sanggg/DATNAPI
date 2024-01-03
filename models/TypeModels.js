const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const typeSchema = new Schema({
    id: { type: ObjectId },
    nameType: { type: String, required: true },
    description: { type: String, required: true },
    row: { type: String, required: true }
});

module.exports = mongoose.models.typee || mongoose.model('typee', typeSchema);

