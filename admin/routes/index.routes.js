import { Router } from 'express';

import { welcome } from '../controllers/index.controller.js';
import { Auth } from '../middlewares/admin.auth.js';
import authRouter from './allroutes/auth.routes.js';
import sysRouter from './allroutes/sys.routes.js';
import { registerAttempts } from '../limiters/admin.limiter.js';

const indexRouter = Router();

indexRouter.get('/', Auth, welcome);

indexRouter.get('/flash', function (req, res) {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!');
    return res.redirect('/');
});

indexRouter.use('/auth', authRouter);
indexRouter.use('/sys', sysRouter);

export default indexRouter;
