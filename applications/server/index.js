const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const OrderModel = require('./models/Orders')
const ProductModel = require("./models/Products");
const cors = require('cors'); 

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://SWEDebuggers:192Faj279da@cluster0.6cjmuit.mongodb.net/csc648Data?retryWrites=true&w=majority"

);

//can move this to routes.js, if needed. 
app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err , result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

app.get("/getOrders", (req, res) => {
    OrderModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } 
        else{
            res.json(result);
        }
    })
})

app.post("/createOrder", async (req, res) => {
    const order = req.body;
    const newOrder = new OrderModel(order);
    await newOrder.save();

    res.json(order);
})

app.get("/getProduct", (req, res) => {
    ProductModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } 
        else{
            res.json(result);
        }
    })
})

app.post("/createProduct", async (req, res) => {
    const product = req.body;
    const newProduct = new ProductModel(user);
    await newProduct.save();

    res.json(product);
})

app.listen(3001, () => {
    console.log("SERVER RUNS!");
})