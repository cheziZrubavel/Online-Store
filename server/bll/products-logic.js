const Category = require("../models/category");
const Product = require("../models/product");
const Order = require("../models/order");

function getAllProductsAsync() {
    return Product.find({}).exec();
};

function getAllOrdersAsync() {
    return Order.find({}).exec();
};

function getOrderByUser(userId) {
    return Order.findOne({userId}).exec();
};

function getAllCategoriesAsync() {
    return Category.find({}).exec();
};

function addProductAsync(product) {
    product.save();
};

function editProductAsync(product) {
    Product.updateOne({
        "_id": product._id
    }, {
        $set: {
            "productName": product.productName,
            "categoryId": product.categoryId,
            "price": product.price,
            "image": product.image
        }
    }, (err, raw) => {
        if (err) console.log(err.message);
        if (raw) console.log(raw);
    })
};

function addOrderAsync(order) {
    return order.save(function(err) {
        if(err) console.log(err);
    });
};

function createCartAsync(cart) {
    cart.creationDate = new Date();
    return cart.save();
};

module.exports = {
    getAllProductsAsync,
    getAllCategoriesAsync,
    addProductAsync,
    editProductAsync,
    addOrderAsync,
    createCartAsync,
    getAllOrdersAsync,
    getOrderByUser
};