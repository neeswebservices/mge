import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const createAccessToken = (payload, secret, options = {}) => {
  return jwt.sign(payload, secret, options);
};

export const getTokenData = (token, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, data) => {
      if (err) reject(err.message);
      resolve(data);
    });
  });
};

export const validObject = (id) => mongoose.isValidObjectId(id);
