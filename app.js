



// Require Express
const express = require('express');
// Require Router
const router = require('./routes');

// body-parser for res
const bodyParser = require('body-parser');

// Mongodb Connection
require('./config/database');

const path = require('path');

var cors = require('cors')


// Create Your Express App
const app = express();



// Declare your PORT
const port = process.env.PORT || 5000;


// parse application/x-www-form-urlencoded for picking data or params
// in post request of forms 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


// cross origin request middleware 
app.use(cors())




// Apply Common Middlewares
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));




//include my personal  logger as middleware  
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



// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Make App Listen on PORT
app.listen(port, () => {
  console.log(`Books API listening at http://localhost:${port}`)
});










