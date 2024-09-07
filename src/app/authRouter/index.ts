import { Router } from 'express';
import { loginHandler } from '../../controller/auth';

export const AuthRouter = Router();

AuthRouter.get('/login', loginHandler)