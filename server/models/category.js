const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({

    categoryName: String
}, {
    versionKey: false,
    toJSON: {virtuals: true}
});

CategorySchema.virtual("products",{
    ref: "Product",
    localField: "_id",
    foreignField: "categoryId"
});

const Category = mongoose.model("Category", CategorySchema, "Categories");

module.exports = Category;