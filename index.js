// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
// Define a test route
app.get('/test', (req, res) => {
    res.send('This is a test route!');
  });
  app.get('/', (req, res) => {
    res.send('Route not found!  --vinayak');
  });
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
