import { Router } from 'express';
import { webhookHandler } from '../../controller/versionControl';

export const VersionControlRouter = Router();

VersionControlRouter.post('/webhook', webhookHandler)