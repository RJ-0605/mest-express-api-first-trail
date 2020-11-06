// Require Express Router
const Router = require('express').Router;
// Require Controller
const controller = require('../controllers/pythoncontrollers');


// Instantiate Router
const router = Router();

// Get All you can access it from /pythonapiget
router.get('/pythonapiget', controller.getAllStudents);




router.post('/pythonapipostbydefault' , controller.postStudentbyIDdefault );



router.post('/pyapipostfromuser' , controller.postStudentbyIDfromuser );





module.exports = router;
