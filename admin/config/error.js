export const createError = (status, msg, stack) => {
  const error = new Error();
  error.message = msg || "Something went wrong";
  error.statusCode = status;
  error.status = status || 500;
  // name ? (error.name = name) : null;
  error.stack = stack;
  return error;
};
