const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Atest")
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log("fail:", err);
  });

const List = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // -> unique
    lowercase: true, // -> Lowercase
    // uppercase: true, // -Uppercase
    trim: true, // -> Remove extra spaces
    minlength: [2, "Custome error msg"], // - works with string
    maxlength: 30,
    enum: ["values", "provided", "in", "array"],
  },
  ctype: String,
  video: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error(" Eroror message");
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
