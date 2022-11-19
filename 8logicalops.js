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

//  logical ops

//   $and
//   $not
//   $nor
//   $or

const readDoc = async () => {
  const data = await Playlist.find({
    $or: [{ ctype: "Front- End" }, { video: { $gt: 50 } }],
  }).select({ name: 1, ctype: 1, _id: 0, video: 1 });
  // .limit(2);
  console.log(data);
};

readDoc();
