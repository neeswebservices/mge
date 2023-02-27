import mongoose from "mongoose";

const breakSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  numberPerDay: {
    type: Number,
    min: [0, "Invalid value, number per day!"],
    default: 1,
    required: true,
  },
  limitTime: {
    type: Number,
    min: [0, "Invalid value, limit time!"],
    required: true,
  },
});

const Break = mongoose.model("Break", breakSchema);

export default Break;
