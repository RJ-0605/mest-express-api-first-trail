// Require Dependencies
// Require Book Model
const BookModel = require('../models/book');

exports.getAllBooks = async (req, res) => {
  // Get All Books From Database
  const allBooks = await BookModel.find();
  // Return Books As Response
  res.json(allBooks);
}

exports.getBookById = async (req, res) => {
  // Retrieve Book Id from Path
  const bookId = req.params.bookId;
  // Get Book From Database By Id
  const book = await BookModel.findById(bookId);
  // Return Book As Response
  res.json(book);
}

exports.createNewBook = async (req, res) => {
  try {
    // Create New Book
    const book = await BookModel.create(req.body);
    // Return Book As Response
    res.status(201).json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

exports.deleteBookById = async (req, res) => {
  // Retrieve Book Id from Path
  const bookId = req.params.bookId;
  // Delete Book From Database with Id
  await BookModel.findByIdAndDelete(bookId);
  // Return Delete Response
  res.send('Book Deleted');
}