import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
  title: String,
  rating: Number,
  year: Number,
  Gener: String,
});

const Movie = model("movie", MovieSchema);

export { Movie };
