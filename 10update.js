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
  const data = await Playlist.findByIDAndUpdate().select({
    // update() updateOne()  updateMany()
    ctype: 1,
    _id: 0,
    video: 1,
    name: 1,
  });
  // .sort({ name: -1 });
  // .countDocuments();
  console.log(data);
};
console.log("Reading for first time");
readDoc();

const updateDoc = async (_id) => {
  try {
    const data = await Playlist.updateOne(
      { _id },
      {
        $set: {
          name: "Abhijit Patil",
        },
      }
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
console.log("Updating");

updateDoc("635a04e6d4f79a40493569d7");
console.log("Reading for second time");
readDoc();
