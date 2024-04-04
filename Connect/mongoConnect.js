const mongoose = require('mongoose');

// Define a function to establish a connection to MongoDB
const mongoConnection = async (url) => {
    console.log("try to connect to mongo...");

    try {
        // try to connect to the MongoDB database using the provided URL
        await mongoose.connect(url);
        console.log("successfully connected to mongo");
    } catch (error) {
        console.log("connection Error: " + error.message);
    }
}


module.exports = mongoConnection;
