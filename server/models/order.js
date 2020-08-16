const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    },
    totalPrice: Number,
    city: String,
    street: String,
    shippingDate: Date,
    OrderDate: Date,
    fourDigitsOfCreditCard: Number

}, {
    versionKey: false,
    toJSON: {virtuals: true},
});

OrderSchema.virtual("user", {
    ref: "User",
    localField: "userId",
    foreignField: "identity"
});

OrderSchema.virtual("cart", {
    ref: "Cart",
    localField: "cartId",
    foreignField: "_id"
});

const Order = mongoose.model("Order", OrderSchema, "Orders");

module.exports = Order;