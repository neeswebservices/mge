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

// export const isObjectId = (id) => mongoose.isValidObjectId(id);
export const isObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

// xx:xx it supports 24 hour format with 0 too
export const validTime = (time) => {
  return String(time).match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

export const validatePassword = (password) => {
  return String(password).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);
};

export const validateUsername = (username) => {
  return String(username).match(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/);
};
