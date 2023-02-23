import { isValidObjectId } from "mongoose";
import { createError } from "../config/error.js";
import { HttpResponse } from "../config/HttpResponse.js";
import { ACCESS_SECRET } from "../env.js";
import { getTokenData } from "../helpers/functions.js";
import SAdmin from "../models/user.model.js";

export const Auth = async (req, res, next) => {
  try {
    const { accesstoken } = req.cookies ?? req?.body ?? req.headers["authorization"];

    if (!accesstoken) return next(createError(401, "Unauthorized"));

    getTokenData(accesstoken.split(" ")[1], ACCESS_SECRET)
      .then(async (data) => {
        if (!isValidObjectId(data)) return next(createError(400, "Invalid Request !"));

        const user = await SAdmin.findById(data);

        if (!user) return next(createError(404, "User not found !"));

        req.user = user.id;

        next();
      })
      .catch((err) => {
        return next(createError(401, "User unauthorized !", err.stack));
      });
  } catch (error) {
    throw error;
  }
};
