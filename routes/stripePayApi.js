const express = require('express')
const router = express.Router();
const stripePayController = require('../controllers/stripePayController')

router.get("/transactions", stripePayController.getTransaction);
router.get("/config", stripePayController.getPublishableKey);
router.post("/create-payment-intent/:amount/:userId", stripePayController.createPayment);

module.exports = router;


