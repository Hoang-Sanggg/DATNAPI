const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.get("/", userController.findAll);
router.post("/", userController.create);
router.get("/:userId", userController.findOne);
router.put("/:userId", userController.update);
router.delete("/:userId", userController.delete);
router.delete("/", userController.deleteAll);

module.exports = router;
