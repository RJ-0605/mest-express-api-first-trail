// Require Express Router
const Router = require('express').Router;
// Require Controller
const controller = require('../controllers/authors');

// Instantiate Router
const router = Router();

// Get All Authors
router.get('/', controller.getAllAuthors);

// Get A Author by ID
router.get('/:authorId', controller.getAuthorById);

// Get Books for An Author
router.get('/:authorId/books', controller.getBooksForAuthor);

// Create New Author
router.post('/', controller.createNewAuthor);

// Delete A Author
router.delete('/:authorId', controller.deleteAuthorById);


module.exports = router;