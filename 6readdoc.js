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

//  Reading docs

const readDoc = async () => {
  const data = await Playlist.find({
    ctype: "Back- End",
  })
    .select({ name: 1, _id: 0 })
    .limit(2);
  console.log(data);
};

readDoc();
