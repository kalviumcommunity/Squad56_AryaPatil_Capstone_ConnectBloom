const mongoose = require("mongoose"); 

// Define Mongoose schema
const categoriesSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    benefits: { type: Array, required: true },
    category: { type: String, required: true },
    location:{type:String , required:true},
    price:{type:Number, required:true}

}); 



const categoriesModel = mongoose.model("categories", categoriesSchema);  


module.exports = { categoriesModel };  
