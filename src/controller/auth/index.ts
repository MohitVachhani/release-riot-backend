import { Request, Response } from 'express';


export async function loginHandler(req: Request, res: Response) {
  return res.send('Login route');
}