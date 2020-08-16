const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    username: String,
    identity: Number,
    password: String,
    city: String,
    street: String,
    role: String
}, {
    versionKey: false,
    toJSON: {virtuals: true},
    id: false
});

UserSchema.virtual("cart", {
    ref: "Cart",
    localField: "identity",
    foreignField: "userId"
});

UserSchema.virtual("order", {
    ref: "Order",
    localField: "identity",
    foreignField: "userId"
});

const User = mongoose.model("User", UserSchema, "Users");

module.exports = User;