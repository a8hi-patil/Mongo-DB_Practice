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

//  comparison ops

//   $gt   - greater than
//   $gte  - greater than and equal to
//   $lt   - less than
//   $lte  - less than and equal to
//   $in   - Acceptys values in array  -> in
//   $nin   - Accepts values in array  -> not in
const readDoc = async () => {
  const data = await Playlist.find({
    ctype: { $nin: ["Back- End", "Data- Base"] },
  }).select({ name: 1, ctype: 1, _id: 0 });
  // .limit(2);
  console.log(data);
};

readDoc();
