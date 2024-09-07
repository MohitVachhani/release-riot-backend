import { Application, Router } from 'express';
import { AuthRouter } from "./authRouter";
import { VersionControlRouter } from './versionControl';


export default class Routes {
  public routes = Router();
  static initializeRoutes(app: Application): void {
    app.use('/auth', AuthRouter);
    app.use('/versionControl', VersionControlRouter);
  }
}

