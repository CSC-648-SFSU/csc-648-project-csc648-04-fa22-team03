const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    age: {
        type: Number, 
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    sID: {
        type: Number,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    gl: {
        type: String, 
        required: true
    }
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel; 