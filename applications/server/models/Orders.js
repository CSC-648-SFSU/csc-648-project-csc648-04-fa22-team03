const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    OrderNumber: {
        type: Number,
        required: true
    },
    OrderTime: {
        type: Date,
        default: Date.now
    },
    NumOfItems: {
        type: Number,
        required: true
    },
    UserEmail: {
        type: String, 
        required: true
    },
    UserPhoneNum: {
        type: Number, 
        required: true
    },
    UserAddress: {
        type: String,
        required: true
    },
    UserSI: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    PaymentMethod: {
        //IDK
    }  
});

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel; 