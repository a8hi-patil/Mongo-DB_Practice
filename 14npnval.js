const mongoose = require("mongoose");
const validator = require("validator");
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
    // required: true,
    // unique: true, // -> unique
    // lowercase: true, // -> Lowercase
    // uppercase: true, // -Uppercase
    // trim: true, // -> Remove extra spaces
    // minlength: [2, "Custome error msg"], // - works with string
    // maxlength: 30,
    // enum: ["values", "provided", "in", "array"],
  },
  ctype: String,
  auther: String,
  email: {
    type: String,
    unique: true,
    validate(values) {
      if (!validator.isEmail(values)) {
        throw new Error(" Error message");
      }
    },
  },
  video: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error(" Error message");
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = new mongoose.model("Playlist", List);
const createDocumet = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "React-JS",
      ctype: "Front- End",
      video: 80,
      email: "ezpss.ya@gmail.co",
      active: true,
    });
    const result = await Playlist.insertMany([reactPlaylist]);
    console.log(result);
  } catch (err) {
    console.log("Erro :", err);
  }
};

createDocumet();
