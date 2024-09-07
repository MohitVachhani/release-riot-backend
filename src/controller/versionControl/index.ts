import { Request, Response } from 'express';


export async function webhookHandler(req: Request, res: Response) {
  console.log('Webhook handler invoked');
  const githubEvent = req.headers['x-github-event'];
  console.log(githubEvent);
  console.log(req.body);
  return res.status(202).send('Accepted');
}