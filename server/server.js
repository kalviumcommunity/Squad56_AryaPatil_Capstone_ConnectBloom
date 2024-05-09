const express = require('express');
const connectToDB = require('./Config/db');
const cors = require("cors");
const { categoriesModel, userModel } = require("./Model/user");
const app = express();
const port = process.env.PORT || 3000; 
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
  
// Dummy user data (replace this with your actual user database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];



// Database Connection
connectToDB(); 

// Routes
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Route to fetch categories data
app.get('/api/categories', async (req, res) => {
  const { location } = req.query; // Get location from query parameters
  try {
    let query = {};
    if (location) {
      query.location = location; // Add location to the query if specified
    }
    let data = await categoriesModel.find(query);
    res.send(data);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Server Error');
  }
});

//Sign up endpoint
app.post('/signup',async (req,res)=>{
  const data=req.body;
  console.log(data)
  try{
    const emailVerfiy=await userModel.findOne({email:data.email});
    if(emailVerfiy){
      return res.send("User exists");
    }
    const saltRounds=10;
    const hashPassword =await bcrypt.hash(data.password,saltRounds);
    const newUser=new userModel({
      name:data.name,
      email:data.email,
      password:hashPassword,
    });
    await newUser.save();
    res.send("Signed iNN");
  }
  catch (error){
    res.status(500).send("Error whle posting"+error.message);
   
  }
})
// Login endpoint
app.post('/api/login', async(req, res) => {
  const { username, password } = req.body;
  console.log(username , password)
  try{ 

    const user = await userModel.findOne({name : username});
    console.log(user)
    if (user) { 
      const hashPasswordMatch=await bcrypt.compare(password,user.password);
      if(hashPasswordMatch){
        res.json({
          message:"You logged in successfully"
        })
      }
      else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
    }else{
      return res.send("User not found");
    }
    
  }
 catch(error){
  res.status(500).send("Error while comparing pass"+error.message);
 }
});

// // After successful authentication
// const token = jwt.sign({ username: user.username }, 'your_secret_key', { expiresIn: '1h' });
// res.json({ token });

// app.get('/protected_route', (req, res) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: 'Token not provided' });

//   jwt.verify(token, 'your_secret_key', (err, decoded) => {
//       if (err) return res.status(401).json({ message: 'Invalid token' });
//       // Token is valid, you can proceed with the request
//       // You can access decoded data like decoded.username
//       res.json({ message: 'Access granted' });
//   });
// });
  
// Start server
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});

module.exports = app;
