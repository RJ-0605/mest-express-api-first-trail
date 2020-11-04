// Require Express
const express = require('express');
// Require Router
const router = require('./routes');

// body-parser for res
const bodyParser = require('body-parser');

// Mongodb Connection
require('./config/database');

// Create Your Express App
const app = express();
// Declare your PORT
const port = process.env.PORT || 3000;

// Apply Common Middlewares
app.use(express.json());

//include logger 
app.use((request, response, next) =>{
	console.log('New Request coming from ', request.id )
	console.log('Request Type ' , request.method ) 
	console.log('IP Address ' , request.ip )
	console.log('Endpoint requested' , request.url)
	console.log('Information posted to API' , request.body )
	
	next();

})

// Apply Router as Middleware
app.use(router);

// Make App Listen on PORT
app.listen(port, () => {
  console.log(`Books API listening at http://localhost:${port}`)
});










