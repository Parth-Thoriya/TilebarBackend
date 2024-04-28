const express = require('express');
const router = express.Router();
const stripe = require("stripe")("sk_test_51Oze9HSDXuRenqofoOINbeU8ZJjJzPSzoXEMRZwPnhqUAGjckXPlUzcZJ8bdMVFIOxezvBqNYLAt7LztyWP2LRbr00IwhJV0Sg");
const { v4: uuidv4 } = require("uuid");

const authenticate = require('../middleware/authenticate.js');
router.post('/pay', authenticate, async (req, res) => {
    console.log("\n\n######## payment1");

    try {
        const { token, products, totalamount } = req.body;
        console.log("\n\n######## payment2");

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        });
        console.log("\n\n######## payment223");


        const payment = await stripe.charges.create(
            {
                amount: totalamount * 100,
                customer: customer.id,
                currency: "USD",

                // receipt_email:token.email

            },
            {
                idempotencyKey: uuidv4()

            }
        );
        console.log("\n\n######## payment", payment);

        res.send({ message: "payment successfull" });
    } catch (error) {
        console.log("error", error)
        res.status(501)
        res.send({ message: "payment failed" });

    }
});
router.post('/stripe', authenticate, async (req, res) => {
    const { products,user } = req.body;
    console.log("!!!@##$%$%^%46%^&") 

    const lineItems = products.map((pt) => ({
        price_data: {
            currency: 'usd',
            product_data: { name: pt.productName },
            unit_amount: req.body.totalamount

        },
        quantity:2

    }));
    console.log("!!!@##$%$%^%46%^&") 
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/home",
        cancel_url: "http://localhost:3000/home/key",
    })
    console.log("#####session",session)
    
    res.status(200)
    res.send({id:session.id})
})
module.exports = router;