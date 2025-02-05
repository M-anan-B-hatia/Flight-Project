
// // This imports the mongoose library, which is used for interacting with MongoDB in Node.js.
// const mongoose = require('mongoose');

// // I use async because connecting to MongoDB is an asynchronous operation (it takes some time to establish a connection).
// const connectDb = async () => {
    
//     try{
//         // I use await because mongoose.connect() returns a promise. The await makes the function wait until the connection is successful.
//         // mongoose.connect(process.env.MONGO_URI, { ... })
//         // This connects to MongoDB using the connection string stored in .env (MONGO_URI).
//         // process.env.MONGO_URI pulls the value from .env, making the database connection configurable.
//         // useNewUrlParser: true → Uses the new MongoDB connection string parser.
//         // useUnifiedTopology: true → Uses the new connection management engine for better reliability.

//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Mongo DB Connected.....")
//     }
//     catch(error) {
//         console.log("MongoDB connection error", error);
//         process.exit(1);
//     }
// };

// module.exports = connectDb;

const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

