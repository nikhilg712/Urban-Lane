const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log(error);
    });
};


module.exports = connectDatabase;