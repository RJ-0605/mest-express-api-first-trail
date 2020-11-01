// Require Dependencies

// Require Authors JSON File
// Reading from local JSON File 
// const allAuthors = require('../data/authors.json');
const AuthorModel = require('../models/author');

// Get All Authors

exports.getAllAuthors = async (req, res) => {
  // Get All Books From Database
  const allAuthors = await AuthorModel.find();
  // Return Books As Response
  res.json(allAuthors);
}


// Get A Author by ID
exports.getAuthorById = async(req, res) => {
  // Retrieve Author Id from Path
  const authorId = req.params.authorId;
  // Get Author From Database By Id
  const author = await AuthorModel.findById(authorId);
  // Return Author As Response
  res.json(author);
  // res.send('Here is A Single Author');
}

// Get Books for An Author
exports.getBooksForAuthor = async(req, res) => {
  // Retrieve Author Id from Path
  const authorId = req.params.authorId;
  // Get Authors books From Database By Id
  const author = await AuthorModel.findById(authorId);
  // Return Author As Response
  res.json(author);

  // after this i will filter the json response
  // res.send('Here is the book from a particular author   id ');
  // res.json(author.books);

  // res.send('Here are all the Books for the Author');
}

// Create New Author
exports.createNewAuthor = async(req, res) => {
  try {
    // Create New Book
    const author = await AuthorModel.create(req.body);
    // Return Book As Response
    res.status(201).json(author);
  } catch (error) {
    res.status(500).send(error.message);
  }
  res.send('You Just Created a New Author');
}

// Delete A Author
exports.deleteAuthorById = (req, res) => {
  res.send('You just deleted A Single Author');
}