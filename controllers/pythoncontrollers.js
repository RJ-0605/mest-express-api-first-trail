

// Require Dependencies
// Require Book Model
const BookModel = require('../models/book');

const fetch = require("node-fetch");


exports.getAllStudents = async (req, res) => {

  // Retrieve Book Id from Path
 // const urlpath =''
  // Get Book From Database By Id
  //const book = await fetch(urlpath);
  // Return Book As Response
  //res.json(book);
  try {
  const response = await fetch(
    `https://mest-python-api-first-trail.herokuapp.com/readjson`
  );
  const data = await response.json();
  res.json(data)
  } catch (error) {
  
  res.status(500).send(error.message)
	}
 
  
};





exports.postStudentbyIDdefault = async (req, res) => {
  const data =''
  url=`https://mest-python-api-first-trail.herokuapp.com/postjson`
  
  try{
  
	var dict = 	     { "Park": 
				    {"medical": [
				      { "room-number": 100,
					"use": "reception",
					"sq-ft": 50,
					"price": 75
				      },
				      { "room-number": 101,
					"use": "waiting",
					"sq-ft": 250,
					"price": 75
				      },
				      { "room-number": 102,
					"use": "examination",
					"sq-ft": 125,
					"price": 150
				      },
				      { "room-number": 103,
					"use": "examination",
					"sq-ft": 125,
					"price": 150
				      },
				      { "room-number": 104,
					"use": "office",
					"sq-ft": 150,
					"price": 100
				      }
				    ],
				    "parking": {
				      "location": "premium",
				      "style": "covered",
				      "price": 750
				    }
				  }
				}  ;
  
  
  
  
  
    console.log(dict)
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dict)
    }
    
    const response = await fetch(url, config)
    const json = await response.json()
    
    
    if (response.ok) {
        
        newmsg = "data is sent"
        res.json(newmsg)
        
     }  else {
    
        
        res.json(response)
   	} 
   }catch(error){
   	console.log(error)
        //
}
 
  
  
}


  
  //

exports.postStudentbyIDfromuser = async (req, res) => {
  const data =''
  url=`https://mest-python-api-first-trail.herokuapp.com/postjson`
  
  try{
  
	var userpost = req.body ;
  
  
  
  
  
    console.log(userpost)
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userpost)
    }
    
    const response = await fetch(url, config)
    const json = await response.json()
    
    
    if (response.ok) {
        
        newmsg = "data is sent"
        res.json(newmsg)
        
     }  else {
    
        
        res.json(response)
   	} 
   }catch(error){
   	console.log(error)
        //
}
 
  
  
}




























