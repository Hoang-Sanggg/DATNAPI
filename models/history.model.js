const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

const History = mongoose.model("History", HistorySchema);

module.exports = History;
