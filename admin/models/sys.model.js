import mongoose from "mongoose";
import { createError } from "../config/error.js";
// import moment from "moment";
import { validTime } from "../helpers/functions.js";
import leaveSchema from "./common/.model.js";

const sysSchema = new mongoose.Schema({
  // using 24 hours date format
  companyName: {
    type: String,
    required: true,
    default: "Your companyName",
  },
  logo: {
    type: String,
    default: "https://logo.svg",
  },
  startTime: {
    type: String,
    // required: true,
    default: "10:00",
  },
  endTime: {
    type: String,
    // required: true,
    default: "17:00",
  },
  department: [String],
  designation: [String],
  idleTime: {
    type: Number,
    min: [1, "Time cannot be less than 1"],
  },
  focusTime: {
    type: Number,
    min: [1, "Time cannot be less than 1"],
  },
});

sysSchema.pre("save", function () {
  if (this.isModified(this.startHour || this.endHour)) {
    if (!validTime(this.startTime) || !validTime(this.endTime)) return next(createError(400, "Invalid Time"));
    console.log(this.startHour);
  }
  next();
});

const System = mongoose.model("System", sysSchema);

export default System;
