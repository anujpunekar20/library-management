const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router
    .route('/')
    .get(bookController.getAllBooks)
    .post(bookController.addNewBook)

router
    .route('/:id')
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook)

module.exports = router;