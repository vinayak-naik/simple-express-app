// app.js
const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;

// Define a test route
app.get('/test', (req, res) => {
  res.send('This is a test route!');
});
app.get('/', (req, res) => {
  res.send('Route not found!  --vinayak');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
