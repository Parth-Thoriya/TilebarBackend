const mongoose = require("mongoose");

const mongoURL = process.env.db;
const connectDB = () => {
  return mongoose
    .connect(mongoURL)
    .then(() => console.log("MongoDB connected successfully...")).catch((e)=>{
      console.log(e,mongoURL)
    })
};

module.exports = { connectDB };
