export const createError = (status = 500, msg, stack) => {
    const error = new Error();
    error.message = msg || 'Something went wrong';
    error.statusCode = status;
    error.status = status;
    // name ? (error.name = name) : null;
    error.stack = stack;
    return error;
};
