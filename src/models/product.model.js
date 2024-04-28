const mongoose = require('mongoose');

const ProductSchema = new  mongoose.Schema({    
    productName:{
        type: String,
        required: true,
    },
    productDiscription:{
        type: String,
    },
    pricePerSqFt:{
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
        
    },
    discountPercent: {
        type: Number,
    },
    manufacturer:{
        type: String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    material:{
        type:String,        
    },
    imageUrls: [
            {
                imgUrl: {type:String, required: true},
            }
        ],
    keySpecs: {         
        commercial: {
            type:String,
        },
        residential: {
            type:String,
        },
        itemColor: {
            type:String,            
        },
        availableColors: String,
        tileFinish: {
            type:String,
            required:true,
        },
        look :{
            type:String
        }
    },
    detail: {
        available: {
            type:String,
            required:true,
        },
        sizes: {
            type:String,
            required:true,
        },
        size: {
            type:String,
            required:true,
        },
        outdooruse:{
            type:String,
            required:true,
        },
        SpFtPerBox: {
            type:Number,
            required:true,
        },
        thickness: {
            type:Number,
            required:true,
        },
        weight: {
            type:Number,
            required:true,
        },
        location: [String]
    },
    

    

});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;

// title: {
    //     type: String,
    //     required: true,
    // },
    // description: {
    //     type: String,
    //     required: true,
    // },
    // details: {
    //     type: String,
    // },
    // occasion: {
    //     type: String,
    // },
    // price: {
    //     type: Number,
    //     required: true,
    // },
    // discountedPrice: {
    //     type: Number,
    //     required: true,
    // },
    // discountPercent: {
    //     type: Number,
    // },
    // quantity: {
    //     type: Number,
    //     required: true,
    // },
    // brand: {
    //     type: String,
    //     required: true,
    // },
    // color: {
    //     type: String,
    //     required: true,
    // },
    // sizes: [
    //     {
    //         weight: {type:Number, required: true},
    //         size:{type:Number, required: true},
    //         stock:{type:Number, required: true},
    //     }
    // ],
    // imageUrls: [
    //     {
    //         imgUrl: {type:String, required: true},
    //     }
    // ],
    // ratings: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "ratings",
    //     },
    // ],
    // reviews: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "reviews",
    //     },
    // ],
    // numRatings: {
    //     type: Number,
    //     default: 0,
    // },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'categories',
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now(),
    // },