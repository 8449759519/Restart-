import { Movie } from "../models/movieModule.js";

const getMovie = async (req, res) => {
  let Allmovie = await Movie.find();
  res.send(Allmovie);
};

const CreateMovie = async (req, res) => {
  let { title, rating, year, Gener } = req.body;
  let NewMovie = { title, rating, year, Gener };
  await Movie.insertMany(NewMovie);
  res.send("Movie is Created");
};

const deleteMovie = async (req, res) => {
  const Movieid = await req.params.id;
  let deleteMovie = await Movie.findByIdAndDelete(Movieid);
  res.status(200).json({
    message: `Movie with id ${Movieid} deleted successfully`,
  });
};

const getMoviebyId = async (req, res) => {
  const Movieid = await req.params.id;
  let MoviesbyId = await Movie.findById(Movieid);
  res.status(200).json({
    MoviesbyId,
  });
};

export { getMovie, CreateMovie, deleteMovie, getMoviebyId };
