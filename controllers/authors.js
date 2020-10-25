// Require Dependencies
// Require Authors JSON File
const allAuthors = require('../data/authors.json');

exports.getAllAuthors = (req, res) => {
  res.json(allAuthors);
}

exports.getAuthorById = (req, res) => {
  res.send('Here is A Single Author');
}

exports.getBooksForAuthor = (req, res) => {
  res.send('Here are all the Books for the Author');
}

exports.createNewAuthor = (req, res) => {
  res.send('You Just Created a New Author');
}

exports.deleteAuthorById = (req, res) => {
  res.send('You just deleted A Single Author');
}