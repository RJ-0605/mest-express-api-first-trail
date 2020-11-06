// Require Express Router
const Router = require('express').Router;
// Require Books Route
// const booksRouter = require('./books');


const pythonRouter= require('./pythonroutes');


// Instantiate Router
const router = Router();

//we need this package to be able to fetch with async await 
const fetch = require("node-fetch");







// Home Route
router.all('/', (req, res) => {
  res.send('Welcome To Students Api ');
});



// post to python api 
router.use('/python', pythonRouter );













// get json data from user 
router.post('/pythonapipostfromuser',async (req, res) => {
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
 
  
  
} );





module.exports = router;



