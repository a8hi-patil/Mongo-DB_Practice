const mongoose = require("mongoose");

// connecting to mongoDB
mongoose
  .connect("mongodb://localhost:27017/Atest")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Failed : ", err);
  });
