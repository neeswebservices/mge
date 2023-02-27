import mongoose, { Schema } from "mongoose";

const casualLeaveModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
  numberPerYear: {
    type: Number,
    min: [0, "Invalid days number less than 1"],
  },
});

const paidLeaveModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: true,
  },
  numberPerYear: {
    type: Number,
    min: [0, "Invalid days number less than 1"],
  },
});

export const CasualLeave = mongoose.model("CasualLeave", casualLeaveModel);
export const PaidLeave = mongoose.model("PaidLeave", paidLeaveModel);
