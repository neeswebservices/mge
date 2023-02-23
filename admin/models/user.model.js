import mongoose from "mongoose";
import { schemaOptions } from "./schemaOptions.js";

const adminUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  schemaOptions
);

const SAdmin = mongoose.model("SAdmin", adminUserSchema);

export default SAdmin;
