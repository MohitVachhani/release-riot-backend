import { Request, Response } from 'express';


export async function webhookHandler(req: Request, res: Response) {
  console.log('Webhook handler invoked');
  console.log(req);

  return res.send()
}