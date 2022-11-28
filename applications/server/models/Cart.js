const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    OrderNumber: {
        type: String,
        required: true
    },
    NumOfItems: {
        type: Number,
        required: true
    },
    ProductName:{
        type: String,
        required: true
    },
    ProductPrice:{
        type:String,
        required: true
    },
    ProductImg:{
        type:String,
        required: true
    },
    ProductTime:{
        type: Object,
        required: false
    },
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel; 