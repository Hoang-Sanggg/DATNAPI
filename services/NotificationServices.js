const NotificationModel = require('../models/NotificationModels');

const getNotification = async () => {
     try {
          const Notification = await NotificationModel.find().populate('Productid').populate('userid');
          return Notification
     }
     catch (error) {
          return false
     }
}
const addNotification = async (Productid, title, content, userid) => {
     try {
          const Notification = await NotificationModel.create({ Productid, title, content, userid });
          return Notification
     }
     catch (error) {
          return false
     }
}
const DeleteNotification = async (id) => {
     try {
          const Notification = await NotificationModel.findByIdAndDelete(id);
          return Notification
     }
     catch (error) {
          return false
     }
}
const UpdateNotification = async (id, Productid, title, content, userid) => {
     try {
          const Notification = await NotificationModel.findByIdAndUpdate(id, { Productid, title, content, userid });
          return Notification
     }
     catch (error) {
          return false
     }
}
module.exports = {
     getNotification,
     addNotification,
     DeleteNotification,
     UpdateNotification
}
