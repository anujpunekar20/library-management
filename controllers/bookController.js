const Book = require('../models/model');

exports.getAllBooks = async (req, res) => {
    try{
        const books = await Book.find();

        res.status(200).json({
            status: 'success',
            totalBooks: books.length,
            data: {
                books
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.addNewBook = async (req, res) => {
    try{
        const books = await Book.create(req.body);

        res.status(200).json({
            status: 'success',
            message: 'book added succesfully',
            data: {
                books
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

// exports.issueBook = async (req, res) => {
    // }
//

exports.deleteBook = async (req, res) =>{
    try{
        const books = await Book.findByIdAndRemove(req.params.id, req.body);
        
        res.status(204).json({
            status: 'success',
            message: 'data deleted'
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}