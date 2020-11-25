// Require Express Router
const Router = require('express').Router;
// Require Books Route
// const booksRouter = require('./books');


const pythonRouter= require('./pythonroutes');


// Instantiate Router
const router = Router();

//we need this package to be able to fetch with async await 
const fetch = require("node-fetch");


//     definite data structure to be shared and definite constants can be defined here.

//        i  can get from database at the beginning for neutral storage 
//       and share among teachers and students and 
//       update in their various dashboards since const allows for that.


const data_source = [ 
							
							[2 , { "id":2, subject:"English",
    								"rating":"3.5", "people" :45 , "status":"not added"} ] ,
    						
    						[3 ,  {"id":3, subject :"Chemistry",
    						"rating":"2.5", "people" :36 , "status":"added"}  ],
    						
    						[1 , { "id":1 , subject :"Biology",
    						"rating":"1.5", "people" :15 , "status":"not added"}  ]
    						
    						]







// the numbercourse would change depending on a particular students change on frontend and also match to figures in database 
const numberofcourse = [{"English":254, "Biology":45 , "Chemistry":400}]


//   this will catch the final update of the student to the 
//    general number of courses
const numbercoursetracker = [{updatecoursenumb:""}]


//  for number of teachers from a particular teachers change on frontend 
//    and also match to figures in database 

const teachersforcourse = [ {"English":2, "Biology":4 , "Chemistry":25} ]


//general number of teachers 
const numberteachertracker = [{updateteachnumb:""}]


const optimizedpython_courses	= {"course_ids":""}


const data = []

  // const data = [ { "id":32, subject:"English",
    //						"rating":"3.5", "people" :45 , "status":"not added"}  ,
    						
    						
    						
   	//			  { "id":33, subject :"Chemistry",
   	//					"rating":"2.5", "people" :36 , "status":"added"}  ,
    				
   	//			{ "id":34 , subject :"Biology",
  		//				"rating":"1.5", "people" :15 , "status":"not added"}
    						 		 
   	//			   ]
   				   
   				   
	//	myjson= [2,1,1]




	
	
	
	// console.log("MY DATA_SOURCE" , data_source[0])

   
	
	const myjson = optimizedpython_courses["course_ids"]
	console.log("MY JsoN fir optimised courses " , myjson )
	console.log("MY JsoN fir optimised courses " , optimizedpython_courses["course_ids"] )
	 pre_data([2,1,1], data_source)
	function pre_data( myjson ,data_source){
	
		
		// console.log("MY JSON" , myjson)
	//	console.log("MY DATA_SOURCE" , data_source[0])
		
		count = 0
		
		for (var x = 0; x< data_source.length; x++ ){
				
				var data_id = data_source[x][0]
			//	console.log("first data " , data_id)
			//	console.log(myjson)
				for (var y =0 ; y< myjson.length ; y++ ){
						console.log(y)
							if( data_id === y ){
							
									data.push(data_source[x][1])
						//	console.log("MY JSON" , y )
							console.log("MY DATA_SOURCE" , data_id)
				                                 }
				 }
				
			
					
			
		}
	
	
		console.log("This is data" )
		console.log(data)
	
	
			
	
			
	
	
			}
	
	
	
	
	
	
	
	






	function Index(gender,race,edulevel,accountype){
	
	
			const _gender = { "female":1, "male":2}
	
			const _races= {"white":2 ,"black":1}
	
			const _edulevel = {"bachelor's degree":4 ,"master's degree":5}
	
			const _accountype = {"free":0, "reduced":0, "standard":1}
	
			
	
			const finalArray = []
			
			
			finalArray.push( _gender[ gender] );
			finalArray.push( _races[ race ] );
			finalArray.push( _edulevel[ edulevel] );
			finalArray.push( _accountype[accountype] );
			
			
			console.log("Final Array aftere USER DEMOGRAPHICS")
			console.log(finalArray)
			
			
	
			
			console.log(finalArray)		
			
			return finalArray   
						
						
					     
			
			
		}





// Home Route
router.all('/', (req, res) => {
  res.send('Welcome To Noe_it Api for Express  ');
});





// An api endpoint that returns a short list of items used for signup for now 
//but can be used for anyhting i can specify whether signup or not with sofware 


router.post('/api/signup', async (req,res) => {



    const fname = req.body["user"]["firstnamex"];
    const lname = req.body["user"]["lastnamex"];
    
    const gender     = req.body["user"]["genderx"];
    const race       = req.body["user"]["racex"]
    const edulevel   = req.body["user"]["edulevelx"]
    const accountype = req.body["user"]["accountTypex"]
    
    
    
    						
    
    
    // calling the index platform to transform the inputs into indices 
    //  ready to be served to python 
    const finalArray =  Index(gender,race,edulevel,accountype)
    
    
    
    console.log(" this final array in signup ")
    console.log(finalArray)
    
    
 //      Now shipping results to python
 
	  url=`https://mest-api-python-project-done.herokuapp.com/postdatajson`
	  
	  try{
	  
		var userpost = finalArray ;
	  
	  
	  
	  
	  
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
		 const msgjson = await response.json()
		 
		 
		 if (response.ok) {
		     
		     newmsg = "data is sent"
		     
		     // getting response from python 
		     console.log("this is message from postrequest")
		     console.log("      ")
		     console.log("      ")
		    
		     
		     
		     // now i gotto to give these indices of course ids to react or maybe backup 
		     // them up in mongodb as well
		     console.log(msgjson)
		     
		   //  const newdata = pre_data(msgjson, data_source)
		     
		   //  console.log("this is new data " ,newdata)
		     console.log(data)
		     optimizedpython_courses["course_ids"] = msgjson
		     
		     console.log("USE OF DICTIONARIES")
		     console.log(optimizedpython_courses["course_ids"])
		     
		     pre_data(myjson, data_source)
		     
		     res.json(response)
		     
		  }  else {
		 
		     
		     res.json(response)
			} 
		}catch(error){
			console.log(error)
		     //
	}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    console.log(req.body);
    
    console.log('Request body for user ');
    console.log(req.body["user"]);
    console.log(req.body["user"]["firstnamex"]);
    
    console.log('Got list of items');
    
    
    
    
    
    
    
    
});














// An api endpoint that returns a short list of items to the studentdASHBOard  forexample 
router.get('/api/getList', (req,res) => {
    var list = { item : { "firstitem" : "item1", "seconditem":"item2", "third" :"item3"}
    
    
    
    
     };
    
    
    
 //   i will share number of courses and courses format for this user
 //    and in the post i will take out his changes in the post to the number of courses 
 //    and update the original one just for the number of courses and pass it to the teacher 
    
    
  //  first pick info from python result which i myjsin and append and sen here 
  
    //pre_data(myjson, data_source)
    
    var courselist = { data : data ,
              
                 numbercourse : numberofcourse
    				   		
    				   			   
    				    }
    						 
    						 
    				 
    						 
    
    
    
    res.json(courselist);
    console.log(courselist)
    console.log('Sent list of items');
});




// pick post from student dashboard about courses the student chose  updated 


router.post('/api/postfromstudashboard',async (req, res) => {
  

   console.log(req.body)
   console.log(req.body.finalsub.totalnum)
   
   numbercoursetracker.updatecoursenumb = req.body.finalsub.totalnum
   
   console.log(numbercoursetracker.updatecoursenumb)
    
  await  console.log('Got list of items');
    
});





// An api endpoint that returns a short list of items
router.get('/api/getListteach', (req,res) => {
    var list = { item : { "firstitem" : "item1", "seconditem":"item2", "third" :"item3"}
    
    
    
    
     };
    
    
    
 //   i will share number of courses and courses format for this user
 //    and in the post i will take out his changes in the post to the number of courses 
 //    and update the original one just for the number of courses and pass it to the teacher 
    
    var teachlist = { data : [ { "id":32, subject:"English",
    						"rating":"3.5", "people" :45 , "status":"not added"}  ,
    						
    						
    						
    				  { "id":33, subject :"Chemistry",
    						"rating":"2.5", "people" :35 , "status":"added"}  ,
    				
    				{ "id":34 , subject :"Biology",
    						"rating":"1.5", "people" :15 , "status":"not added"}
    						
    		 
    		 
    				   ] ,
              
                 numberteach : teachersforcourse
    				   		
    				   			   
    				    }
    						 
    						 
    				 
    						 
    
    
    
    res.json(teachlist);
    console.log(teachlist)
    console.log('Sent list of items');
});




// pick post from student dashboard about courses the student chose  updated 


router.post('/api/postfromteachdashboard',async (req, res) => {
  const data =''

   console.log(req.body)
   console.log(req.body.finalsub.totalteach)
   
   
   
   numberteachertracker.updateteachnumb = req.body.finalsub.totalteach
   
   // total teachers number teaching the course 
   //  updated can pass info to students if we want 
   console.log(numbercoursetracker.updatecoursenumb)
    
  await  console.log('Got list of items');
    
});





















// post to python api 
router.use('/python', pythonRouter );












// get json data from user i will use this for the signup which will send user demographics from signup to python api and 
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



