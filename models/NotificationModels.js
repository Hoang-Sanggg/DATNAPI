const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NotificationSchema = new Schema({
    id: { type: ObjectId },
    Productid: { type: ObjectId, ref: 'Product' },
    title: { type: String, require: true },
    content: { type: String, require: true },
    userid: { type: ObjectId, ref: 'User' },
});

module.exports = mongoose.model.Notification || mongoose.model('Notification', NotificationSchema);
