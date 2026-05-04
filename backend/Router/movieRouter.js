import { Router } from "express";
import {
  getMovie,
  CreateMovie,
  deleteMovie,
  getMoviebyId,
} from "../Controller/MovieController.js";

import {
  addUser,
  getUser,
  login,
  ForgotPassword,
} from "../Controller/authController.js";

const MovieRouter = Router();

MovieRouter.get("/movie", getMovie);
MovieRouter.post("/movie", CreateMovie);
MovieRouter.delete("/movie/:id", deleteMovie);
MovieRouter.get("/movie/:id", getMoviebyId);

MovieRouter.post("/register", addUser);
MovieRouter.get("/user", getUser);
MovieRouter.get("/login", login);
MovieRouter.post("/forgot-password", ForgotPassword);

export { MovieRouter };
