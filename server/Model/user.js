const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    benefits: { type: [String], required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    contact: { type: String, required: true }, // New contact field
    address: { type: String, required: true }, 
});

const categoriesModel = mongoose.model("categories", categoriesSchema);

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  password:{type:String, required:true}
});

const userModel = mongoose.model('users', userSchema);

module.exports = { categoriesModel , userModel };
