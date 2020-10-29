// Require Express
const express = require('express');
// Require Router
const router = require('./routes');

// Mongodb Connection
require('./config/database');

// Create Your Express App
const app = express();
// Declare your PORT
const port = process.env.PORT || 3000;

// Apply Common Middlewares
app.use(express.json());

// Apply Router as Middleware
app.use(router);

// Make App Listen on PORT
app.listen(port, () => {
  console.log(`Books API listening at http://localhost:${port}`)
});