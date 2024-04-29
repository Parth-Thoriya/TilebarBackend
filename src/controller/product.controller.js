const productService = require('../services/product.service.js');
const reviewService = require("../services/review.service.js")
const createProduct = async(req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

const deleteProduct = async(req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

const updateProduct = async(req, res) => {
    const productId = req.params.id;

    try {
        const product = await productService.updateProduct(productId, req.body);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

const findProductById = async(req, res) => {
    const productId = req.params.id;

    try {
        const product = await productService.findProductById(productId);
        const review = await  reviewService.getAllReview(product._id)        
        return res.status(201).send({product,review});

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

const getAllProducts = async(req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

const createMultipleProducts = async(req, res) => {
    try {
        const product = await productService.createMultipleProducts(req.body);
        return res.status(201).send({message: "Products created successfully"});

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    createMultipleProducts,
    findProductById
}


