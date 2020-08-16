const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    creationDate: Date,
}, {
    versionKey: false,
    toJSON: {virtuals: true}
});

CartSchema.virtual("user", {
    ref: "User",
    localField: "userId",
    foreignField: "identity"
});

CartSchema.virtual("cartItem", {
    ref: "CartItem",
    localField: "_id",
    foreignField: "cartId",
    justOne: true
});

CartSchema.virtual("order", {
    ref: "Order",
    localField: "_id",
    foreignField: "cartId",
    justOne: true
});
const Cart = mongoose.model("Cart", CartSchema, "Carts");

module.exports = Cart;