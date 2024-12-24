const express = require('express');
const connectToDB = require('./Config/db');
const cors = require('cors');
const { categoriesModel, userModel } = require('./Model/user');
const app = express();  
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
require('dotenv').config();   

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectToDB();

app.get('/ping', (req, res) => {
  res.send('pong');
});

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

app.post('/signup', async (req, res) => {
  const data = req.body;
  console.log(data);
  if (!data.name || !data.email || !data.password) {
    return res.status(400).send('Name, email, and password are required');
  }

  try {
    const emailVerify = await userModel.findOne({ email: data.email });
    if (emailVerify) {
      return res.status(409).send('User already exists');
    }
    const hashPassword = await bcrypt.hash(data.password, 10);
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

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ name: username });
    if (user) {
      const hashPasswordMatch = await bcrypt.compare(password, user.password);
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

app.post('/sale', async (req, res) => {
  const data = req.body;
  try {
    const newSale = new categoriesModel(data);
    await newSale.save();
    res.status(201).send(newSale);
  } catch (error) {
    console.error('Error adding sale:', error);
    res.status(500).send('Server Error');
  }
});



app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});

module.exports = app;
