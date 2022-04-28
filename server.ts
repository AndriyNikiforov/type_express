import * as express from 'express';
import { Application, Request, Response } from 'express';

const port = 3000;
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.listen(port, () => console.log(`http://localhost:${port}`));
