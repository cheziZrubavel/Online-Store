const express = require("express");
const productsLogic = require("../bll/products-logic");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const mongoose = require("mongoose");
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        //Appending extension
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({
    storage: storage
});
var fs = require(`fs`);
const Product = require("../models/product");
const Order = require("../models/order");
const Cart = require("../models/cart");

const router = express.Router();

router.get("/all-products", async (request, response) => {
    try {
        const products = await productsLogic.getAllProductsAsync();
        response.json(products);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/all-orders", async (request, response) => {
    try {
        const orders = await productsLogic.getAllOrdersAsync();
        response.json(orders);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/order-by-user/:userId", async (request, response) => {
    try {
        let userId = request.params.userId;
        const order = await productsLogic.getOrderByUser(userId);
        response.json(order);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// Invoke this middleware for any products route: 
router.use(verifyLoggedIn);

router.get("/all-categories", async (request, response) => {
    try {
        const categories = await productsLogic.getAllCategoriesAsync();
        response.json(categories);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

router.post("/add-product", upload.single('image'), async (request, response) => {
    try {
        let productData = new Product();
        productData.productName = request.body.name;
        productData.categoryId = mongoose.Types.ObjectId(request.body.category);
        productData.price = request.body.price;
        productData.image = request.file.filename;
        const addedProduct = await productsLogic.addProductAsync(productData);
        response.status(201).json(addedProduct);
    } catch (err) {
        console.log(err.message);
        response.status(500).send(err.message);
    }
});

router.put("/edit-product",  upload.single('image'), async (request, response) => {
    try {
        let productData = new Product();
        productData._id = request.body.id;
        productData.productName = request.body.name;
        productData.categoryId = mongoose.Types.ObjectId(request.body.category);
        productData.price = request.body.price;
        productData.image = request.file.filename;
        const editedProduct = await productsLogic.editProductAsync(productData);
        response.status(201).json(editedProduct);
    } catch (err) {
        console.log(err.message);
        response.status(500).send(err.message);
    };
});

router.post("/add-order", async (request, response) => {
    try {
        let order = new Order();
        order.userId = request.body.user_id;
        order.cartId = request.body.cart_id;
        order.totalPrice = request.body.totalPrice;
        order.city = request.body.city;
        order.street = request.body.street;
        order.shippingDate = request.body.shippingDate;
        order.orderDate = request.body.orderDate;
        order.fourDigitOfCreditCart = request.body.fourDigitOfCreditCart;
        const addedOrder = await productsLogic.addOrderAsync(order);
        response.status(201).json(addedOrder);
    } catch (err) {
        console.log(err.message);
        response.status(500).send(err.message);
    }
});

router.post("/create-cart", async (request, response) => {
    try {
        let cart = new Cart();
        cart.userId = request.body._id;
        const createdCart = await productsLogic.createCartAsync(cart);
        response.status(201).json(createdCart);
    } catch (err) {
        console.log(err.message);
        response.status(500).send(err.message);
    }
});

module.exports = router;