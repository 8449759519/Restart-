import express from "express";
import { connect } from "mongoose";
import { MovieRouter } from "./Router/movieRouter.js";

let app = express();

app.use(express.json());
app.use(MovieRouter);

app.listen(5000, async () => {
  const connection = await connect("mongodb://localhost:27017/");
  console.log("server is hosted in port 5000");
});
