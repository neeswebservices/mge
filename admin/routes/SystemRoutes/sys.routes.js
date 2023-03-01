import { Router } from 'express';

const sysRouter = Router();

sysRouter.get('/', (req, res) => res.send('hi'));

export default sysRouter;
