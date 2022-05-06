const mongoose = require('mongoose')
const port = 27017
let count = 0;

const connectDB = () => {
    console.log('Connecting to MongoDB');
    mongoose.connect(`mongodb://localhost:${port}/test`).then(() =>{
        console.log('MongoDB is connected')
    }).catch((err) => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectDB, 5000);
    })
};

module.exports = connectDB