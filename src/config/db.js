const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.db;
console.log(mongoURL,"::::",typeof(mongoURL));

const connectDB = () => {
  return mongoose
    .connect(mongoURL)
    .then(() => console.log("MongoDB connected successfully...")).catch((e)=>{
      console.log(e,mongoURL)
    })
};

module.exports = { connectDB };
