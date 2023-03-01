const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: [true, 'A book must have a title'],
        unique: true,
    },
    bookAuthor: {
        type: String,
        required: [true, 'A book must have an author'],
        unique: true,
    },
    bookGenre: {
        type: String,
    },
    bookRelease: {
        type: Number,
        required: true,
    }
})

const Book = mongoose.model('book', bookSchema);

module.exports = Book;