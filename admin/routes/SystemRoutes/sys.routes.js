import { Router } from 'express';
import { createSystem } from '../../controllers/SystemAdmin/createSystem.js';

const sysRouter = Router();

sysRouter.get('/', (req, res) => res.send('hi'));

sysRouter.post('/', createSystem);

export default sysRouter;
