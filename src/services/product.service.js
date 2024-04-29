const Product = require("../models/product.model");
async function createProduct(reqData) {
    const product = new Product({        
            productName:reqData.productName ,
            pricePerSqFt:reqData.pricePerSqFt ,
            discountedPrice: reqData.discountedPrice,
            discountPercent: reqData.discountPercent,
            manufacturer: reqData.manufacturer,
            category: reqData.category,
            material: reqData.material,
            imageUrls:reqData.imageUrls,
            keySpecs: reqData.keySpecs,
            detail:reqData.detail
    })
    return await product.save();
}

async function deleteProduct(productId) {
    try {
        const product = await findProductById(productId);
        await Product.findByIdAndDelete(productId);
        return {message:"Product deleted successfully"};
    } catch (error) {
        throw new Error(error.message);       
    }
}

async function updateProduct(productId, reqData) {
    return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id) {
    const product = await Product.findById(id).populate("category").exec();

    if(!product) {
        throw new Error("Product not found with id: "+ id);
    }
    return product;
}

async function getAllProducts(reqQuery) {
   
    let query = Product.find()
   
    const products = await query.exec();
    return {content: products};
    
}
async function createMultipleProducts(products) {
    for(let product of products) {
        await createProduct(product);
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProducts
}