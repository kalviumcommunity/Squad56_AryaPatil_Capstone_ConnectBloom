const express = require('express');
const connectToDB = require('./Config/db');
const cors = require("cors");
const { categoriesModel,Sale } = require ("./Model/user");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Database Connection
connectToDB();

// Routes
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Route to fetch categories data
app.get('/api/categories', async (req, res) => {
  try {
    let data = await categoriesModel.find({});
    res.send(data);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Server Error');
  }
});

// Route to add a new category
app.post('/api/sale', async (req, res) => {
  try {
    const { image, name, benefits, category, location, price } = req.body;
    const newSale = new categoriesModel({ image, name, benefits, category, location, price });
    await newSale.save();
    res.status(201).send('Sale added successfully');
  } catch (error) {
    console.error('Error adding sale:', error);
    res.status(500).send('Server Error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});

module.exports = app;
