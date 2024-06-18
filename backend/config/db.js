const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI environment variable is not defined".red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
  

    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

