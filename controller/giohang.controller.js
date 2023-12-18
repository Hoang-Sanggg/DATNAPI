const GioHang = require("../models/giohang.model");

const gioHangController = {
  // Tạo mới một gioHang
  create: (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Nội dung không thể trống!"
      });
      return;
    }

    // Tạo mới một gioHang
    const gioHang = new GioHang({
      status: req.body.status,
      role: req.body.role,
      userId: req.body.userId
    });

    // Lưu gioHang vào cơ sở dữ liệu
    GioHang.create(gioHang, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Đã xảy ra lỗi khi tạo GioHang."
        });
      else res.send(data);
    });
  },

  // Lấy tất cả gioHang từ cơ sở dữ liệu
  findAll: (req, res) => {
    GioHang.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Đã xảy ra lỗi khi lấy dữ liệu gioHang."
        });
      else res.send(data);
    });
  },

  // Tìm một gioHang dựa trên Id
  findOne: (req, res) => {
    GioHang.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Không tìm thấy gioHang với id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Lỗi khi lấy gioHang với id " + req.params.id
          });
        }
      } else res.send(data);
    });
  },

  // Cập nhật một gioHang dựa trên Id
  update: (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Nội dung không thể trống!"
      });
    }

    // Cập nhật gioHang dựa trên Id
    GioHang.updateById(
      req.params.id,
      new GioHang(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Không tìm thấy gioHang với id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Lỗi khi cập nhật gioHang với id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  },

  // Xóa một gioHang dựa trên Id
  delete: (req, res) => {
    GioHang.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Không tìm thấy gioHang với id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Không thể xóa gioHang với id " + req.params.id
          });
        }
      } else res.send({ message: `GioHang đã được xóa thành công!` });
    });
  },

  // Xóa tất cả gioHang từ cơ sở dữ liệu
  deleteAll: (req, res) => {
    GioHang.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Đã xảy ra lỗi khi xóa tất cả gioHang."
        });
      else res.send({ message: `Tất cả gioHang đã được xóa thành công!` });
    });
  }
};

module.exports = gioHangController;
