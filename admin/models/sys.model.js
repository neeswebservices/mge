import mongoose from "mongoose";
import moment from "moment";

const sysSchema = new mongoose.Schema({
  // using 24 hours date format
  startHour: {
    type: Date,
  },
  endHour: {
    type: Number,
  },
  department: [String],
  designation: [String],
  focusTime: {
    type: Date,
  },
});

sysSchema.pre("save", function () {
  if (this.isModified(this.startHour || this.endHour)) {
    if (!this.startHour.match(/^[0-2][0-3]:[0-5][0-9]$/)) return next(createError());
    console.log(this.startHour);
  }
});

const System = mongoose.model("System", sysSchema);

export default System;
