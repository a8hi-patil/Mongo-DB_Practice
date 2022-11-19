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

//  Sorting and Counting
//  .count() old .countDocuments() new to get count of documents matched

const readDoc = async () => {
  const data = await Playlist.find()
    .select({ ctype: 1, _id: 0, video: 1, name: 1 })
      .sort({ name: -1 });
  // .countDocuments();
  console.log(data);
};

readDoc();
