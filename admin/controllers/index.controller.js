export const welcome = async (req, res, next) => {
  try {
    return res.send("Welcome to Management Event");
  } catch (error) {
    next(error);
  }
};

export const serverStatus = () => {
  return {
    state: "up",
    dbState: mongoose.STATES[mongoose.connection.readyState],
  };
};
