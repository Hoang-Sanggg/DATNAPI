const NotificationModel = require('../models/NotificationModels');

const getNotification = async () => {
  try{
   const Notification = await NotificationModel.find().populate('Productid');
   return Notification
  }
  catch(error){
       throw new Error(error)
  }
}
const addNotification = async (Productid, title, content, userid) => {
   try{
    const Notification = await NotificationModel.create({ Productid, title, content, userid });
    return Notification
   }
   catch(error){
        throw new Error(error)
   }
}
const DeleteNotification = async (id) => {
   try{
    const Notification = await NotificationModel.findByIdAndDelete(id);
    return Notification
   }
   catch(error){
        throw new Error(error)
   }
}
const UpdateNotification = async (id, Productid, title, content, userid) => {
   try{
       const Notification = await NotificationModel.findByIdAndUpdate(id, { Productid, title, content, userid });
       return Notification
   }
   catch(error){
        throw new Error(error)
   }
}
module.exports = {
    getNotification,
    addNotification,
    DeleteNotification,
    UpdateNotification
}
