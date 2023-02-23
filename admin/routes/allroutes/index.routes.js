import { Router } from "express";
import { welcome } from "../../controllers/index.controller.js";
import { Auth } from "../../middlewares/admin.auth.js";
import authRouter from "./auth.routes.js";
import sysRouter from "../sys.routes.js";

const indexRouter = Router();

indexRouter.get("/", Auth, welcome);
indexRouter.use("/auth", authRouter);
indexRouter.use("/sys", sysRouter);

export default indexRouter;
