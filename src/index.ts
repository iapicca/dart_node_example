import express, { Request, Response } from 'express';
import { greeting } from './greeting.js';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(greeting());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
