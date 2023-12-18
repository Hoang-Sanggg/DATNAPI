const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    userId: { type: String, required: true },
    // Các trường khác tùy thuộc vào yêu cầu của bạn
  },
  { timestamps: true }
);

const History = mongoose.model("History", HistorySchema);

module.exports = History;
