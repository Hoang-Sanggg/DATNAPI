require('dotenv').config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
});

const getTransaction = async (req, res, next) => {
    try {
        const transactions = await stripe.charges.list(); // Lấy danh sách các giao dịch từ Stripe
        res.json(transactions);
    } catch (error) {
        console.log("get transaction stripe error: ", error)
        return res.status(500).json({ error: "get transaction stripe error" })
    }
}

const createPayment = async (req, res) => {
    try {
        const { amount, userId, content } = req.params;
        console.log("check params ", req.params);
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "VND",
            amount: amount,
            automatic_payment_methods: { enabled: true },

        });

        // Send publishable key and PaymentIntent details to client
        res.send({
            clientSecretId: paymentIntent.id, clientSecret: paymentIntent.client_secret
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
}
const getPublishableKey = (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
}
module.exports = {
    getTransaction, createPayment, getPublishableKey
}