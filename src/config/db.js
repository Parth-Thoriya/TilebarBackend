const mongoose = require("mongoose");

const mongoURL = process.env.db;
const connectDB = () => {
  return mongoose
    .connect(mongoURL)
    .then(() => console.log("MongoDB connected successfully..."))
};

module.exports = { connectDB };
