// Require Express Router
const Router = require('express').Router;
// Require Books Route
const booksRouter = require('./books');
// Require Authors Route
const authorsRouter = require('./authors');
// Require Admin Route
const adminRouter = require('./admin');

// Instantiate Router
const router = Router();

// Home Route
router.all('/', (req, res) => {
  res.send('Welcome To Books API');
});

// Books Route
router.use('/books', booksRouter);

// Authors Route
router.use('/authors', authorsRouter);

// Admin Route
router.use('/admin', adminRouter);

module.exports = router;