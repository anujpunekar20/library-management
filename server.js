const connectDB = require('./config/db');
const express = require('express');
const morgan = require('morgan');
const { connect } = require('mongoose');

require('dotenv').config();
const app = express();

const bookRoute = require('./routes/bookRoutes');
const userRoute = require('./routes/auth');

connectDB();

app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Please maintain silence in the library!'
    })
})

app.use('/api/books', bookRoute);
app.use('/api/auth', userRoute);

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server initialised and running on port ${PORT}`);
})