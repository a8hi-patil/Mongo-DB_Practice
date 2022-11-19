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
  video: Number,
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
      active: true,
    });
    // const JSPlaylist = new Playlist({
    //   name: "JS",
    //   ctype: "Front- End",
    //   video: 150,
    //   active: true,
    // });
    // const NodePlaylist = new Playlist({
    //   name: "Node-JS",
    //   ctype: "Back- End",
    //   video: 84,
    //   active: true,
    // });

    // const ExpPlaylist = new Playlist({
    //   name: "Express-JS",
    //   ctype: "Back- End",
    //   video: 824,
    //   active: true,
    // });

    const result = await Playlist.insertMany([reactPlaylist]);
    console.log(result);
  } catch (err) {
    console.log("Erro :", err);
  }
};

createDocumet();
