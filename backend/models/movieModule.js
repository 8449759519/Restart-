import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
  title: {
    type: String,
  },
  rating: {
    type: Number,
  },
  year: {
    type: Number,
  },
  Gener: {
    type: String,
  },
});

const Movie = model("movie", MovieSchema);

export { Movie };
