const express = require('express');
const connectToDB = require('./Config/db');
const cors = require('cors');
const { categoriesModel, userModel } = require('./Model/user');
const app = express();
// const port = process.env.PORT || 3000; 
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
require('dotenv').config();   

const port = process.env.PORT || 3000;
const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

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

// Sign up endpoint with input validation and error handling
app.post('/signup', async (req, res) => {
  const data = req.body;
  console.log(data);
  // Input validation
  if (!data.name || !data.email || !data.password) {
    return res.status(400).send('Name, email, and password are required');
  }

  try {
    const emailVerify = await userModel.findOne({ email: data.email });
    if (emailVerify) {
      return res.status(409).send('User already exists');
    }
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(data.password, saltRounds);
    const newUser = new userModel({
      name: data.name,
      email: data.email,
      password: hashPassword,
    });
    await newUser.save();
    res.send('Signed In');
  } catch (error) {
    res.status(500).send('Error while signing up: ' + error.message);
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ name: username });
    if (user) {
      const hashPasswordMatch = await bcrypt.compare(password, user.password);
      console.log(hashPasswordMatch , password , user.password)
      if (hashPasswordMatch) {
        const token = jwt.sign(
          { id: user._id, name: user.name },
          process.env.JWT_SECRET
        );
        res.json({
          token: token,
          message: 'You logged in successfully!',
          id: user._id,
        });
      } else {
        res.status(401).send('Incorrect password');
      }
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error while comparing password: ' + error.message);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});

module.exports = app;
