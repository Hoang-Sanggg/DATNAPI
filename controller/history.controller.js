const History = require("../models/history.model");

const historyController = {
  // Hàm lấy tất cả các lịch sử giao dịch
  findAll: (req, res) => {
    History.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm tạo mới một lịch sử giao dịch
  create: (req, res) => {
    const history = new History({
      role: req.body.role,
      userId: req.body.userId,
      // Các trường khác tùy thuộc vào model của bạn
    });

    history
      .save()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm lấy một lịch sử giao dịch dựa trên historyId
  findOne: (req, res) => {
    History.findOne({ historyId: req.params.historyId })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: `Not found history with historyId ${req.params.historyId}.` });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm cập nhật một lịch sử giao dịch dựa trên historyId
  update: (req, res) => {
    History.findOneAndUpdate({ historyId: req.params.historyId }, req.body, { new: true })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: `Not found history with historyId ${req.params.historyId}.` });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm xóa một lịch sử giao dịch dựa trên historyId
  delete: (req, res) => {
    History.findOneAndRemove({ historyId: req.params.historyId })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: `Not found history with historyId ${req.params.historyId}.` });
          return;
        }
        res.json({ message: "History was deleted successfully!" });
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // Hàm xóa tất cả các lịch sử giao dịch
  deleteAll: (req, res) => {
    History.deleteMany({})
      .then(() => res.json({ message: "All histories were deleted successfully!" }))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
};

module.exports = historyController;
