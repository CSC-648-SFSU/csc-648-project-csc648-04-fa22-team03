const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    OrderNumber: {
        type: Number,
        required: true
    },
    NumOfItems: {
        type: Number,
        required: true
    },
    ProductName:{
        type: String,
        required: true
    }
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel; 