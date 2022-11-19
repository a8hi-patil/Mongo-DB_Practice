const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Atest")
  .then(() => {
    console.log("Connection Succesfull");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

//   Schema is nothing but defining structure of document

const list = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  video: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// collection creation
const List = new mongoose.model("Playlist", list);

// Create Document
// new method
const createDocumet = async () => {
  try {
    const reactPlaylist = new List({
      name: "React-JS",
      ctype: "Front- End",
      video: 80,
      active: true,
    });
    const result = await reactPlaylist.save();

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocumet();




//  old method
// const reactPlaylist = new List({
//   name: "React-JS",
//   ctype: "Front- End",
//   video: 80,
//   active: true,
// });
// // reactPlaylist.save();  ->saving document
