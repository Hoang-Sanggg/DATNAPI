const User = require("../models/user.model");

const userController = {
  // Hàm lấy tất cả các users
  findAll: (req, res) => {
    User.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm tạo mới một user
  create: (req, res) => {
    const user = new User({
      userId: req.body.userId,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      name: req.body.name,
      uytin: req.body.uytin || 0,
    });

    user
      .save()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm lấy một user dựa trên userId
  findOne: (req, res) => {
    User.findOne({ userId: req.params.userId })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: `Not found user with userId ${req.params.userId}.` });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm cập nhật một user dựa trên userId
  update: (req, res) => {
    User.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: `Not found user with userId ${req.params.userId}.` });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm xóa một user dựa trên userId
  delete: (req, res) => {
    User.findOneAndRemove({ userId: req.params.userId })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: `Not found user with userId ${req.params.userId}.` });
          return;
        }
        res.json({ message: "User was deleted successfully!" });
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm xóa tất cả các users
  deleteAll: (req, res) => {
    User.deleteMany({})
      .then(() => res.json({ message: "All users were deleted successfully!" }))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
};

module.exports = userController;
