const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace with your MongoDB connection string
        const conn = await mongoose.connect('mongodb+srv://Purvaja:Purvaja@12@cluster0.mongodb.net/Affordable_House_Finder?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
