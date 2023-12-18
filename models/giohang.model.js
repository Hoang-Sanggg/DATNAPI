const mongoose = require("mongoose");

// Định nghĩa schema cho bảng GioHang
const GioHangSchema = new mongoose.Schema(
  {
    status: Boolean,
    role: String,
    userId: String
  },
  { timestamps: true }
);

// Tạo model từ schema và xuất nó
const GioHang = mongoose.model("GioHang", GioHangSchema);
module.exports = GioHang;
