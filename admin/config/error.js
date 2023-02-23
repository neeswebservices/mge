export const createError = (status, msg, stack, name) => {
  const error = new Error();
  error.message = msg || "Something went wrong";
  error.status = status || 500;
  name ? (error.name = name) : null;
  error.stack = stack;
  return error;
};
