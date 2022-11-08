const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ProductID: {
        type: Number,
        required: true
    },
    ProductTime: {
        type: Date,
        default: Date.now
    },
    ProductDescription: {
        type: String,
        required: true
    },
    ProductTransactionID: {
        type: Number, 
        required: true
    },
    MaxProducts: {
        type: Number, 
        required: true
    },
    ProductImage: {
        data: Buffer, 
        contentType: String
    },
    ProductName: {
        type: String, 
        required: true
    },
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel; 