import { Router } from 'express';

import { registerAttempts } from '../services/admin.limiter.js';
import { Auth } from '../middlewares/admin.auth.js';
import sysRouter from './SystemRoutes/sys.routes.js';
import authRouter from './AuthRoutes/auth.routes.js';
import { Welcome } from '../controllers/Index/index.controller.js';

const indexRouter = Router();

indexRouter.get('/', Auth, Welcome);

indexRouter.use('/auth', authRouter);
indexRouter.use('/sys', sysRouter);

export default indexRouter;
