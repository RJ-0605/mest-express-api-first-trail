// Require Express Router
const Router = require('express').Router;
// Require Controller
const controller = require('../controllers/admin');

// Instantiate Router
const router = Router();

// Admin Login
router.post('/login', controller.adminLogin);

// Admin Logout
router.post('/logout', controller.adminLogout);


module.exports = router;