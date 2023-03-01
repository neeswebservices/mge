export const createSystem = (req, res, next) => {
    try {
        // starttime and end time will be in seconds
        const { companyName, logo, startTime, endTime, idleTime, focusTime } = req.body;
    } catch (error) {
        throw error;
    }
};
