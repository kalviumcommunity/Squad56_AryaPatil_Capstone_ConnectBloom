const mongoose = require("mongoose"); 

// Define Mongoose schema
const categoriesSchema = new mongoose.Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    benefits: { type: Array, required: true },
    category: { type: String, required: true },

});

const categoriesModel = mongoose.model("categories", categoriesSchema); 

module.exports = { categoriesModel};