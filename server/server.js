const express = require('express');
const connectToDB = require('./Config/db');
const cors = require("cors");
const { categoriesModel, User } = require("./Model/user");
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
  { id: 1, username: 'user1', password: '$2a$12$VrFBXoJmzC63YdfH7Zx3yOXEWYwP5Dw0pO82Rq5nldO7Vh3ZCC/SO' }, // Hashed version of 'password1'
  { id: 2, username: 'user2', password: '$2a$12$TgX0.ROKrr0I8UXMVOpgGeSFE7kyJtE60SwXv1kPX6c0N82B09E6u' }  // Hashed version of 'password2'
];




// Database Connection
connectToDB(); 

// Routes
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Route to fetch categories data
app.get('/api/categories', async (req, res) => {
  const { location } = req.query; 
  try {
    let query = {};
    if (location) {
      query.location = location; 
    }
    let data = await categoriesModel.find(query);
    res.send(data);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Server Error');
  }
});

// Login endpoint
app.post('/api/login',async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user) { 
    const match = await bcrypt.compare(password, user.password);
  } else {
     if (match){
       res.json({ success: true, message: 'Login successful', user });}
      res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});
  

// Start server
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});

module.exports = app;
