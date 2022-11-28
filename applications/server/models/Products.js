const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    ProductDescription: {
        type: String,
        required: true
    },
    ProductImg: {
        type: String,
        required: true
    },
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel; 