const express = require('express');
const connectToDB = require('./Config/db');
const { categoriesModel } = require('./Model/user.js'); // Import the categoriesModel
const cors = require("cors")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

// Database Connection
connectToDB();

//Routes
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Route to fetch categories data
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await categoriesModel.find({});
    res.send(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});

module.exports = app;
