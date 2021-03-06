import * as express from "express";
import { Request, Response } from "express";

import initialState from "./initialState";

const app = express();
const port = process.env.PORT || 3005;



app.get('/', (req: Request, res: Response) => {
  res.send('Hello types');
});

app.get('/api/v1', (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.json(initialState)
})

app.listen(port, () => {
  console.log(`App Listinging at ${port}`)
});