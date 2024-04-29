const cartService = require('../services/cart.service.js');

const findUserCart = async(req, res) => {
    try {
        const user = req.user;
        const cart = await cartService.findUserCart(user.id);
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({error: error.message});        
    }
}

const addItemToCart = async(req, res) => {
    try {        
        const user = req.user;
        const cartItem = await cartService.addCartItem(user._id, req.body);        
        return res.status(200).send({message:cartItem});
    } catch (error) {
        return res.status(500).send({error: error.message});        
    }
}

module.exports = {
    findUserCart,
    addItemToCart,
}
