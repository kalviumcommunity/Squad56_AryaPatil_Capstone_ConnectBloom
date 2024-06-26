// categoriesModel.js
const mongoose = require("mongoose"); 

const categoriesSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    benefits: { type: Array, required: true },
    category: { type: String, required: true },
    location: { type:String,required:true }, 
    price: { type: Number, required: true }
}); 

const categoriesModel = mongoose.model("categories", categoriesSchema);  


// const locationSchema = new mongoose.Schema({
//     name: { type: String, required: true }
// });

// const Location = mongoose.model("Location", locationSchema);
// userModel.js


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


module.exports = { categoriesModel , User}; 
