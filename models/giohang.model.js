const mongoose = require("mongoose");

const GioHangSchema = new mongoose.Schema(
  {
    status: Boolean,
    role: String,
    userId: String
  },
  { timestamps: true }
);

const GioHang = mongoose.model("GioHang", GioHangSchema);
module.exports = GioHang;
