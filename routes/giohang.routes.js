const express = require("express");
const giohangController = require("../controller/giohang.controller");

const router = express.Router();

router.get("/", giohangController.findAll);
router.post("/", giohangController.create);
router.get("/:gioHangId", giohangController.findOne);
router.put("/:gioHangId", giohangController.update);
router.delete("/:gioHangId", giohangController.delete);
router.delete("/", giohangController.deleteAll);

module.exports = router;
