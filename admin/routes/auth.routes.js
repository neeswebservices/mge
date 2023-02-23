import { Router } from "express";
import { userLogin, userLogout, userRegister } from "../controllers/user.controller.js";
import { Auth } from "../middlewares/admin.auth.js";

const authRouter = Router();

authRouter.post("/admin/register", userRegister);
authRouter.post("/admin/login", userLogin);
authRouter.get("/admin/logout", Auth, userLogout);

export default authRouter;
