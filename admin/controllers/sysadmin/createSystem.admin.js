export const createSystem = (req, res, next) => {
  try {
    const { companyName, logo, startTime, endTime, idleTime, focusTime } = req.body;
  } catch (error) {
    throw error;
  }
};
