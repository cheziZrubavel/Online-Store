const mongoose = require("mongoose");

const CartItemSchema = mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: Number,
    generalPrice: Number,
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    }
}, {
    versionKey: false,
    toJSON: {virtuals: true},
});

CartItemSchema.virtual("product", {
    ref: "Product",
    localField: "productId",
    foreignField: "_id"
});

CartItemSchema.virtual("cart", {
    ref: "Cart",
    localField: "cartId",
    foreignField: "_id"
});

const CartItem = mongoose.model("cart-item", CartItemSchema, "CartItems");

module.exports = CartItem;