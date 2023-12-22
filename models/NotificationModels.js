const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NotificationSchema = new Schema({
    id: { type: ObjectId },
    Productid: { type: String, require: true },
    title: { type: String, require: true },
    content: { type: String, require: true },
    userid: { type: String, require: true },
});

module.exports = mongoose.model.Notification || mongoose.model('Notification', NotificationSchema);