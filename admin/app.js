import express from "express";
import compression from "compression";
// import express-rate-limit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import redis from "redis";
import indexRouter from "./routes/index.routes.js";
import morgan from "morgan";
import authRouter from "./routes/allroutes/auth.routes.js";
import { createError } from "./config/error.js";
import healthcheck from "express-healthcheck";
import mongoose from "mongoose";
import os from "os";
import address from "address";
// import response-time from "response-time";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(morgan("combined"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ extended: false }));

// app.use(cookieParser());

const serverStatus = () => {
  return {
    state: "up",
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
//  Plug into middleware.
app.use(
  "/api/uptime",
  healthcheck({
    healthy: serverStatus,
  })
);

// main route
app.use("/api/v1", indexRouter);

app.get("*", (req, res, next) => {
  return next(createError(404, "Request error, Not Found!"));
});

app.use((err, req, res, next) => {
  if (err) {
    return res.status(err?.status || 500).send({
      msg: err?.message ?? "Something went wrong!",
      OK: false,
      success: false,
      statusCode: err?.statusCode || 500,
      error: true,
      timestamp: new Date(),
      stack: (process.env.ENV = "development" ? err.stack : null),
      ipAddress: req.socket?.remoteAddress,
    });
  }
});

export default app;
