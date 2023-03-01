import { createError } from '../../config/error.js';
import { validTime, validateName, validateUrl } from '../../services/functions.js';

export const createSystem = (req, res, next) => {
    try {
        // starttime and end time will be in seconds
        const { companyName, logo, startTime, endTime, idleTime, focusTime } = req.body;

        if (!(companyName || idleTime || focusTime)) return next(createError(400, 'Please submit all the fields!'));

        if (!validateName(companyName)) return next(createError(400, 'Company name is invalid!'));

        if (startTime && !validTime(startTime)) return next(createError(400, 'Invalid Start time!'));
        if (endTime && !validTime(endTime)) return next(createError(400, 'Invalid end time!'));

        if (!Number(focusTime) || !Number(idleTime)) return next(createError(400, 'Focus and idle time is not number!'));

        if (logo && !validateUrl(logo)) return next(createError(400, 'Invalid logo url!'));

        return res.send('hello');
        xx;
    } catch (error) {
        throw error;
    }
};
