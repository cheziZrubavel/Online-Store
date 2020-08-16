const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

    productName: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    price: Number,
    image: String
    //  { data: Buffer, contentType: String }
}, {
    versionKey: false,
    toJSON: {virtuals: true}
});

ProductSchema.virtual("category", {
    ref: "Category",
    localField: "categoryId",
    foreignField: "_id",
    justOne: true
});

ProductSchema.virtual("cartItem", {
    ref: "CartItem",
    localField: "_id",
    foreignField: "productId",
    justOne: true
});

const Product = mongoose.model("Product", ProductSchema, "Products");

module.exports = Product;