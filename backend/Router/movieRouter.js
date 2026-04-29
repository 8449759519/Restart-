import { Router } from "express";
import {
  getMovie,
  CreateMovie,
  deleteMovie,
  getMoviebyId,
} from "../Controller/MovieController.js";

const MovieRouter = Router();

MovieRouter.get("/movie", getMovie);
MovieRouter.post("/movie", CreateMovie);
MovieRouter.delete("/movie/:id", deleteMovie);
MovieRouter.get("/movie/:id", getMoviebyId);

export { MovieRouter };
