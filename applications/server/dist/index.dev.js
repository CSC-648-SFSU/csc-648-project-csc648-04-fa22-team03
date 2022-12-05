"use strict";

var express = require("express");

var app = express();

var mongoose = require('mongoose');

var UserModel = require('./models/Users');

var CartModel = require('./models/Cart');

var LoginModel = require('./models/Login');

var OrderModel = require('./models/Orders');

var ProductModel = require("./models/Products");

var cors = require('cors');

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://admin:4321@13.52.100.0:27017/");
app.get("/getLogin", function (req, res) {
  LoginModel.find({}, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/createLogin", function _callee(req, res) {
  var login, newLogin;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          login = req.body;
          newLogin = new LoginModel(login);
          _context.next = 4;
          return regeneratorRuntime.awrap(newLogin.save());

        case 4:
          res.json(login);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); //can move this to routes.js, if needed. 

app.get("/getUsers", function (req, res) {
  UserModel.find({}, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/createUser", function _callee2(req, res) {
  var user, newUser;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          user = req.body;
          newUser = new UserModel(user);
          _context2.next = 4;
          return regeneratorRuntime.awrap(newUser.save());

        case 4:
          res.json(user);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get("/getCart", function (req, res) {
  CartModel.find({}, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/createCart", function _callee3(req, res) {
  var cart, newCart;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          cart = req.body;
          newCart = new CartModel(cart);
          _context3.next = 4;
          return regeneratorRuntime.awrap(newCart.save());

        case 4:
          res.json(cart);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.get("/getOrders", function (req, res) {
  OrderModel.find({}, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/createOrder", function _callee4(req, res) {
  var order, newOrder;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          order = req.body;
          newOrder = new OrderModel(order);
          _context4.next = 4;
          return regeneratorRuntime.awrap(newOrder.save());

        case 4:
          res.json(order);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // app.push("/deleteItem", async (req, res) => {
//     const item = req.body;
//     const newItem = new ItemModel(item);
//     await newOrder.save();
//     res.json(order);
// })

app.get("/getProducts", function (req, res) {
  ProductModel.find({}, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/createProducts", function _callee5(req, res) {
  var products, newProduct;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          products = req.body;
          newProduct = new ProductModel(products);
          _context5.next = 4;
          return regeneratorRuntime.awrap(newProduct.save());

        case 4:
          res.json(products);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app["delete"]('/delete/:productId', function _callee6(req, res) {
  var productId;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          productId = req.params.productId;
          _context6.next = 3;
          return regeneratorRuntime.awrap(CartModel.findByIdAndRemove(productId).exec());

        case 3:
          res.send("itemdeleted");

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
});
app.put('/update', function _callee7(req, res) {
  var newQuantity, id;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          newQuantity = req.body.newQuantity;
          id = req.body.id;
          _context7.prev = 2;
          _context7.next = 5;
          return regeneratorRuntime.awrap(CartModel.findById(id, function (error, itemToUpdate) {
            itemToUpdate.NumOfItems = Number(newQuantity);
            itemToUpdate.save();
          }));

        case 5:
          _context7.next = 10;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](2);
          console.log(_context7.t0);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[2, 7]]);
});
app.listen(3001, function () {
  console.log("SERVER RUNS!");
});