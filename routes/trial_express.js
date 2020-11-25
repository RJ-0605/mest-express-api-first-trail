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


	const gendernew = { "female":1, "male":2}
	
	const racesnew = {"white":2 ,"black":1}
	
	const racesnew = {"white":2 ,"black":1}
	


//general list to serve 

const serve_python = [{finaltray:""}]


	function Index(gender,race,edulevel,accountype,courses){
	
	
			general_list = [];
			
			console.log(gender,race)
			
			
			function genfunc(gender){
						if (gender ==="female"){general_list.push(1)
						} else if(gender ==="male"){general_list.push(2)}
						
									 }
			          
			          
			function racefunc(race){
						if (race ==="black"){general_list.push(1)
						} else if(race ==="white"){general_list.push(2)}
						
									 }
			
			function edulevelfunc(edulevel){
						if (edulevel ==="bachelor's degree"){general_list.push(4)
						} else if(edulevel ==="master's degree"){general_list.push(5)}
						
									 }
			          
			function accountypefunc(accountype){
						if (accountype ==="free"||"reduced"){general_list.push(0)
						} else if(accountype ==="standard"){general_list.push(1)}
			
			          }  
			        
			// running the functions with the provided input     
			genfunc(gender)
			racefunc(race)
			edulevelfunc(edulevel) 
			accountypefunc(accountype)       
			        
			console.log(general_list)  
			        
			 console.log("here ARE THE COURSES ")
			 console.log(courses)
			        
			 maincopy=[]    
			 
			  
			   
			function coursefunc(courses){
							console.log("here ARE THE COURSES IN FUNCTION")
							console.log(courses)
							
							// i am using same id for courses to enable easy embedding for future 
							
							var major_coursearray = [ ]
							console.log(major_coursearray)
							
							
						
							
							// for ( var count = 0; count < courses.length() ; count++ )
							
							
							
							
							console.log(courses)
							
							const course_sum = []
							const collector = []
							
							
							const codeone = general_list
							const codetwo = general_list
							const codethree = general_list
							
							
						for ( var count = 0; count < courses.length ; count++ ){
							
								var tracked = false 
							if ( courses[`${count}`] ==="English"){
							
										console.log('english here')
										
												
												course_sum.push(32);
												
												codeone.push(course_sum)
												console.log("This is codeone ")
												
												console.log(codeone)
												console.log(course_sum)
												console.log(course_sum)
												
												
												
										
									} else if(courses[`${count}`] ==="Chemistry"){
									
									
									
										
											
											course_sum.pop();
											
											course_sum.push(33)
											
										
											codetwo.push(course_sum)
											console.log("This is codetwo ")
												
											console.log(codetwo)
											
											console.log(course_sum)
											
											
											
											
									} else if(courses[`${count}`]  ==="Biology"){
									
									
									
													
													course_sum.pop();
													course_sum.push(34)
													
													
													codethree.push(course_sum)
													console.log("This is codethree ")
														
													console.log(codethree)
													
													console.log(course_sum)
													
									
									}
							
							    
		 						}
			
			
								console.log("HERE IS THE COURSE SUM JUST BELOW")
								console.log(course_sum)
								
								console.log(course_sum[1])
								console.log("END")
								
						 
							
							
					//	for (let x in course_sum ){
							//		console.log(course_sum[`${x}`]);
							
				//		}
			
						
						
						
						console.log("This is the first general List before the mess")
						console.log(general_list)
									
						codeone.push(course_sum[0]['0'])
						codeone.push(general_list)
						console.log(codeone)
						
						console.log("This is the first general List")
						console.log(general_list)
						
						
						
						console.log("This is general List")
						
						console.log(general_list)
						
						blue = course_sum[0]['1']
						console.log(blue)
						codetwo.push(blue)
						codetwo.push(general_list)
						console.log(codetwo)
					
						
						
						
						
						
						codethree.push(course_sum['2'])
						console.log(codethree)
						
			
					// after for loop i can make new list 
					}
						     
						
						
			  coursefunc(courses)			     
			
			
		}





// Home Route
router.all('/', (req, res) => {
  res.send('Welcome To Noe_it Api for Express  ');
});





// An api endpoint that returns a short list of items used for signup for now 
//but can be used for anyhting i can specify whether signup or not with sofware 


router.post('/api/signup', (req,res) => {



    const fname = req.body["user"]["firstnamex"];
    const lname = req.body["user"]["lastnamex"];
    
    const gender     = req.body["user"]["genderx"];
    const race       = req.body["user"]["racex"]
    const edulevel   = req.body["user"]["edulevelx"]
    const accountype = req.body["user"]["accountTypex"]
    
    const courses   =  
    							[ req.body["user"]["courseonex"],
    							  req.body["user"]["coursetwox"],
    							  req.body["user"]["coursethreex"]
    							]
    
    						
    
    
    // calling the index platform to transform the inputs into indices 
    //  ready to be served to python 
    Index(gender,race,edulevel,accountype,courses)
    
    console.log(req.body);
    
    console.log('Request body for user ');
    console.log(req.body["user"]);
    console.log(req.body["user"]["firstnamex"]);
    
    console.log('Got list of items');
    
    
    
    
    
    
    
    
});














// An api endpoint that returns a short list of items
router.get('/api/getList', (req,res) => {
    var list = { item : { "firstitem" : "item1", "seconditem":"item2", "third" :"item3"}
    
    
    
    
     };
    
    
    
 //   i will share number of courses and courses format for this user
 //    and in the post i will take out his changes in the post to the number of courses 
 //    and update the original one just for the number of courses and pass it to the teacher 
    
    var courselist = { data : [ { "id":32, subject:"English",
    						"rating":"3.5", "people" :45 , "status":"not added"}  ,
    						
    						
    						
    				  { "id":33, subject :"Chemistry",
    						"rating":"2.5", "people" :35 , "status":"added"}  ,
    				
    				{ "id":34 , subject :"Biology",
    						"rating":"1.5", "people" :15 , "status":"not added"}
    						
    		 
    		 
    				   ] ,
              
                 numbercourse : numberofcourse
    				   		
    				   			   
    				    }
    						 
    						 
    				 
    						 
    
    
    
    res.json(courselist);
    console.log(courselist)
    console.log('Sent list of items');
});




// pick post from student dashboard about courses the student chose  updated 


router.post('/api/postfromstudashboard',async (req, res) => {
  const data =''

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



////////////////////////////////////////////////////////////////////////



//     17th November 18:23

//   latest from frank 



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


	


//general list to serve 

const serve_python = [{finaltray:""}]


	function Index(gender,race,edulevel,accountype,courses){
	
	
			const _gender = { "female":1, "male":2}
	
			const _races= {"white":2 ,"black":1}
	
			const _edulevel = {"bachelor's degree":4 ,"master's degree":5}
	
			const _accountype = {"free":0, "reduced":0, "standard":1}
	
			const _courses = { "English":32, "Biology":33 , "Chemistry":34 }
	
			const finalArray = []
			
			
			finalArray.push( _gender[ gender] );
			finalArray.push( _races[ race ] );
			finalArray.push( _edulevel[ edulevel] );
			finalArray.push( _accountype[accountype] );
			
			
			console.log("Final Array aftere USER DEMOGRAPHICS")
			console.log(finalArray)
			
			let courseList = []
			
			if(courses[0])
			  courseList.push(_courses[courses[0]])
			if(courses[1])
			  courseList.push(_courses[courses[1]])
			if(courses[2])
			  courseList.push(_courses[courses[2]])
			finalArray.push(courseList);
	
			
			console.log(finalArray)		
			
			     
						
						
					     
			
			
		}





// Home Route
router.all('/', (req, res) => {
  res.send('Welcome To Noe_it Api for Express  ');
});





// An api endpoint that returns a short list of items used for signup for now 
//but can be used for anyhting i can specify whether signup or not with sofware 


router.post('/api/signup', (req,res) => {



    const fname = req.body["user"]["firstnamex"];
    const lname = req.body["user"]["lastnamex"];
    
    const gender     = req.body["user"]["genderx"];
    const race       = req.body["user"]["racex"]
    const edulevel   = req.body["user"]["edulevelx"]
    const accountype = req.body["user"]["accountTypex"]
    
    const courses   =  
    							[ req.body["user"]["courseonex"],
    							  req.body["user"]["coursetwox"],
    							  req.body["user"]["coursethreex"]
    							]
    
    						
    
    
    // calling the index platform to transform the inputs into indices 
    //  ready to be served to python 
    Index(gender,race,edulevel,accountype,courses)
    
    console.log(req.body);
    
    console.log('Request body for user ');
    console.log(req.body["user"]);
    console.log(req.body["user"]["firstnamex"]);
    
    console.log('Got list of items');
    
    
    
    
    
    
    
    
});














// An api endpoint that returns a short list of items
router.get('/api/getList', (req,res) => {
    var list = { item : { "firstitem" : "item1", "seconditem":"item2", "third" :"item3"}
    
    
    
    
     };
    
    
    
 //   i will share number of courses and courses format for this user
 //    and in the post i will take out his changes in the post to the number of courses 
 //    and update the original one just for the number of courses and pass it to the teacher 
    
    var courselist = { data : [ { "id":32, subject:"English",
    						"rating":"3.5", "people" :45 , "status":"not added"}  ,
    						
    						
    						
    				  { "id":33, subject :"Chemistry",
    						"rating":"2.5", "people" :35 , "status":"added"}  ,
    				
    				{ "id":34 , subject :"Biology",
    						"rating":"1.5", "people" :15 , "status":"not added"}
    						
    		 
    		 
    				   ] ,
              
                 numbercourse : numberofcourse
    				   		
    				   			   
    				    }
    						 
    						 
    				 
    						 
    
    
    
    res.json(courselist);
    console.log(courselist)
    console.log('Sent list of items');
});




// pick post from student dashboard about courses the student chose  updated 


router.post('/api/postfromstudashboard',async (req, res) => {
  const data =''

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









///////////////////////////////////////////////////////////////

//         last test



/////////////////////////////////////////////////////////


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


	


//general list to serve 

const serve_python = [{finaltray:""}]


	function Index(gender,race,edulevel,accountype,courses){
	
	
			const _gender = { "female":1, "male":2}
	
			const _races= {"white":2 ,"black":1}
	
			const _edulevel = {"bachelor's degree":4 ,"master's degree":5}
	
			const _accountype = {"free":0, "reduced":0, "standard":1}
	
			const _courses = { "English":32, "Biology":33 , "Chemistry":34 }
	
			const finalArray = []
			
			
			finalArray.push( _gender[ gender] );
			finalArray.push( _races[ race ] );
			finalArray.push( _edulevel[ edulevel] );
			finalArray.push( _accountype[accountype] );
			
			
			console.log("Final Array aftere USER DEMOGRAPHICS")
			console.log(finalArray)
			
			let courseList = []
			
			if(courses[0])
  				courseList.push([...finalArray, _courses[courses[0]]])
			if(courses[1])
 				courseList.push([...finalArray, _courses[courses[1]]])
			if(courses[2])
  				courseList.push([...finalArray, _courses[courses[2]]])
			finalArray.push(courseList);
	
			
			console.log(finalArray)		
			
			     
						
						
					     
			
			
		}





// Home Route
router.all('/', (req, res) => {
  res.send('Welcome To Noe_it Api for Express  ');
});





// An api endpoint that returns a short list of items used for signup for now 
//but can be used for anyhting i can specify whether signup or not with sofware 


router.post('/api/signup', (req,res) => {



    const fname = req.body["user"]["firstnamex"];
    const lname = req.body["user"]["lastnamex"];
    
    const gender     = req.body["user"]["genderx"];
    const race       = req.body["user"]["racex"]
    const edulevel   = req.body["user"]["edulevelx"]
    const accountype = req.body["user"]["accountTypex"]
    
    const courses   =  
    							[ req.body["user"]["courseonex"],
    							  req.body["user"]["coursetwox"],
    							  req.body["user"]["coursethreex"]
    							]
    
    						
    
    
    // calling the index platform to transform the inputs into indices 
    //  ready to be served to python 
    Index(gender,race,edulevel,accountype,courses)
    
    console.log(req.body);
    
    console.log('Request body for user ');
    console.log(req.body["user"]);
    console.log(req.body["user"]["firstnamex"]);
    
    console.log('Got list of items');
    
    
    
    
    
    
    
    
});














// An api endpoint that returns a short list of items
router.get('/api/getList', (req,res) => {
    var list = { item : { "firstitem" : "item1", "seconditem":"item2", "third" :"item3"}
    
    
    
    
     };
    
    
    
 //   i will share number of courses and courses format for this user
 //    and in the post i will take out his changes in the post to the number of courses 
 //    and update the original one just for the number of courses and pass it to the teacher 
    
    var courselist = { data : [ { "id":32, subject:"English",
    						"rating":"3.5", "people" :45 , "status":"not added"}  ,
    						
    						
    						
    				  { "id":33, subject :"Chemistry",
    						"rating":"2.5", "people" :35 , "status":"added"}  ,
    				
    				{ "id":34 , subject :"Biology",
    						"rating":"1.5", "people" :15 , "status":"not added"}
    						
    		 
    		 
    				   ] ,
              
                 numbercourse : numberofcourse
    				   		
    				   			   
    				    }
    						 
    						 
    				 
    						 
    
    
    
    res.json(courselist);
    console.log(courselist)
    console.log('Sent list of items');
});




// pick post from student dashboard about courses the student chose  updated 


router.post('/api/postfromstudashboard',async (req, res) => {
  const data =''

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


















