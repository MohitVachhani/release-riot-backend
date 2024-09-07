import express from 'express';
import Routes from './routes';

export const app = express();
const port = process.env.HTTP_PORT;


function listenServer(): void {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export function startServer(): void {
  listenServer();
  Routes.initializeMiddlewares(app);
  Routes.initializeRoutes(app);
}



