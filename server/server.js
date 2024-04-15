const express = require('express');
const connectToDB = require('./Config/db'); // Corrected path to db.js

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Database Connection
connectToDB();

//Routes    
app.get('/ping', (req, res) => {
  res.send('pong');
});
// Start server
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});

module.exports = app;
