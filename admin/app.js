import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import redis from 'redis';
import indexRouter from './routes/index.routes.js';
import morgan from 'morgan';
import flash from 'connect-flash';
import { createError } from './config/error.js';
import healthcheck from 'express-healthcheck';
import mongoose from 'mongoose';
import os from 'os';
import address from 'address';
import responseTime from 'response-time';
import { bruteforce } from './services/express.brute.js';
import { adminLimiter } from './services/admin.limiter.js';
import session from 'express-session';

const app = express();
export const store = new session.MemoryStore();

export const logger = console.log.bind(console); // Later i'll use Winston!

app.use(
    session({
        secret: 'aitc@monitor',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 3600000 },
        // store,
    })
);
// cookie: { secure: true, path: '/', maxAge: new Date(Date.now() + 900000), httpOnly: false },

app.use(compression());
app.use(express.json());
app.use(cookieParser('aitc@monitor'));
app.use(cors({ origin: '*' }));
app.use(morgan('combined'));
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(express.urlencoded({ extended: false }));
app.use(responseTime());
app.use(flash());

// flash test

const serverStatus = () => {
    return {
        state: 'up',
        code: 200,
        dbState: mongoose.STATES[mongoose.connection.readyState],
        arch: os.arch(),
        mem: os.totalmem(),
        CPUs: os.cpus().length,
        ip: address.ip(),
        // yourIp: ipAddress,
        // mac: await address.mac(),
    };
};

app.use(
    '/api/uptime',
    healthcheck({
        healthy: serverStatus,
    })
);

// app.use('/api/v1', bruteforce.prevent, adminLimiter, indexRouter);
app.use('/api/v1', indexRouter);

app.get('*', (req, res, next) => {
    return next(createError(404, 'Request error, Not Found!'));
});

app.use((err, req, res, next) => {
    if (err) {
        return res.status(err?.status ?? 500).send({
            msg: err?.message ?? 'Something went wrong!',
            OK: false,
            success: false,
            statusCode: err?.statusCode || 500,
            error: true,
            timestamp: new Date(),
            stack: (process.env.ENV = 'development' ? err.stack : null),
            ipAddress: req.socket?.remoteAddress,
        });
    }
});

export default app;
