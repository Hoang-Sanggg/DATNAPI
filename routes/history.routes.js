const express = require("express");
const historyController = require("../controller/history.controller");

const router = express.Router();

router.get("/", historyController.findAll);
router.post("/", historyController.create);
router.get("/:historyId", historyController.findOne);
router.put("/:historyId", historyController.update);
router.delete("/:historyId", historyController.delete);
router.delete("/", historyController.deleteAll);

module.exports = router;
