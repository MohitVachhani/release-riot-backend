import 'dotenv/config';
import { startServer } from './app';

async function initServer(): Promise<void> {
  startServer();
}

initServer();