const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://127.0.0.1:27017/db_restaurant"
    );
    console.log("Connected to MongoDb");
  } catch (error) {
    console.error("Error connecting to MongoDb", error);
    throw error;
  }
};

module.exports = connectDb;
