import express, { Request, Response } from "express";

const app = express();

app.get(`/votes`, (req: Request, res: Response) => {
  return res.send(`hello`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port`, port);
});
