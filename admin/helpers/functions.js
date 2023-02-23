import jwt from "jsonwebtoken";

export const createAccessToken = (payload, secret, options = {}) => {
  return jwt.sign(payload, secret, options);
};
