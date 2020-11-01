// Require Mongoose
const mongoose = require('mongoose');

// Define Book Schema
const AuthorSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: true },
  rating: { type: mongoose.Schema.Types.String, required: true },
  books: { type: mongoose.Schema.Types.Number, required: true },
  authorId: { type: mongoose.Schema.Types.Number, required: true }
});

// Model and Export
module.exports = mongoose.model("Authors", AuthorSchema);