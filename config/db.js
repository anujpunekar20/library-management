const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
const db = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB is connected');
    }catch(err){
        console.log(err.messsage);
        process.exit(1);
    }
};

module.exports = connectDB;