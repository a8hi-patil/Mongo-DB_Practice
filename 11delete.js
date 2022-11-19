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

//  Delete the documents

const deleteDocument = async (_id) => {
  try {
    // const result = await Playlist.deleteOne({ _id });
    const result = await Playlist.findByIdAndDelete({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
deleteDocument("635a04e6d4f79a40493569d8");
