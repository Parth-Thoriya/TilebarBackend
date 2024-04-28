const mongoose = require("mongoose");

// const mongoURL ="mongodb+srv://kd3805:kd%40123@cluster0.tsxq3nw.mongodb.net/gayatri?retryWrites=true&w=majority";
const mongoURL = "mongodb+srv://22010101192:22010101192@cluster0.hwxwgb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () => {
  return mongoose
    .connect(mongoURL)
    .then(() => console.log("MongoDB connected successfully..."))
};

module.exports = { connectDB };
