import { createError } from "../config/error.js";

export const Auth = (req, res, next) => {
  try {
    const { accesstoken } = req.cookies ?? req?.body ?? req.headers["authorization"];

    if (!accesstoken) return next(createError(400, "Invalid Request"));

    next();
  } catch (error) {
    throw error;
  }
};
