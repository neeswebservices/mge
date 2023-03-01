import { rateLimit } from 'express-rate-limit';

export const adminLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

export const registerAttempts = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: 'Too many accounts created from this IP, Please try again after an hour!',
    standardHeaders: true,
    legacyHeaders: false,
});

export const loginAttempts = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 15,
    message: 'Too many login attempts, please try again after an hour!',
    standardHeaders: true,
    legacyHeaders: false,
});
