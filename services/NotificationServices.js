const NotificationModel = require('../models/NotificationModels');

const getNotification = async () => {
    const Notification = await NotificationModel.find();
    return Notification
}
const addNotification = async (Productid, title, content, userid) => {
    const Notification = await NotificationModel.create({ Productid, title, content, userid });
    return Notification
}
const DeleteNotification = async (id) => {
    const Notification = await NotificationModel.findByIdAndDelete(id);
    return Notification
}
const UpdateNotification = async (id, Productid, title, content, userid) => {
    const Notification = await NotificationModel.findByIdAndUpdate(id, { Productid, title, content, userid });
    return Notification
}
module.exports = {
    getNotification,
    addNotification,
    DeleteNotification,
    UpdateNotification
}
