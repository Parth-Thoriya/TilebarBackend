const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://22010101192:22010101192@cluster0.hwxwgb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () => {
  return mongoose
    .connect(mongoURL)
    .then(() => console.log("MongoDB connected successfully..."))
};

module.exports = { connectDB };
