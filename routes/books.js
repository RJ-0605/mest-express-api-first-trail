// Require Express Router
const Router = require('express').Router;
// Require Controller
const controller = require('../controllers/books');


// Instantiate Router
const router = Router();

// Get All Books
router.get('/', controller.getAllBooks);

// Get A Book by ID
router.get('/:bookId', controller.getBookById);

// Create New Book
router.post('/', controller.createNewBook);

// Delete A Book
router.delete('/:bookId', controller.deleteBookById);


module.exports = router;