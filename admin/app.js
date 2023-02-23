import express from "express";
import compression from "compression";
// import express-rate-limit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import redis from "redis";
import indexRouter from "./routes/index.routes.js";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
// import response-time from "response-time";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// routes
app.use("/api/v1", indexRouter);
// app.use("/api/v1/auth", authRouter);

app.use((err, req, res, next) => {
  if (err) {
    return res.status(err?.status || 500).send({
      msg: err?.message ?? "Something went wrong!",
      status: false,
      success: false,
      error: true,
      timestamp: new Date().toLocaleString(),
      stack: (process.env.ENV = "development" ? err.stack : null),
    });
  }
});

export default app;
