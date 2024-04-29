const express = require('express');
const router = express.Router();
const stripe = require("stripe")("sk_test_51Oze9HSDXuRenqofoOINbeU8ZJjJzPSzoXEMRZwPnhqUAGjckXPlUzcZJ8bdMVFIOxezvBqNYLAt7LztyWP2LRbr00IwhJV0Sg");
const { v4: uuidv4 } = require("uuid");

const authenticate = require('../middleware/authenticate.js');
router.post('/pay', authenticate, async (req, res) => {
    

    try {
        const { token, products, totalamount } = req.body;
        

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        });
        


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
        

        res.send({ message: "payment successfull" });
    } catch (error) {
        
        res.status(501)
        res.send({ message: "payment failed" });

    }
});
router.post('/stripe', authenticate, async (req, res) => {
    const { products,user } = req.body;
    

    const lineItems = products.map((pt) => ({
        price_data: {
            currency: 'usd',
            product_data: { name: pt.productName },
            unit_amount: req.body.totalamount

        },
        quantity:2

    }));
    
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/home",
        cancel_url: "http://localhost:3000/home/key",
    })
    
    
    res.status(200)
    res.send({id:session.id})
})
module.exports = router;