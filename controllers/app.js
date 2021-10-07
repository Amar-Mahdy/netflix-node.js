import movies from "../database/movies.js";
import { v4 as uuidv4 } from 'uuid';

export const getMovies = (req, res) => {
  res.status(200)
  .send(movies);
};

export const addMovie = (req, res) => {
  const movie = req.body;
    const newMovie = {
        id: uuidv4(),
        title: movie.title,
        director: movie.director,
        release_date: movie.release_date
    }
    if(!newMovie.title || !newMovie.director || !newMovie.release_date){
        return res.status(400)
        .json({msg:'please include a title, director and release_date'})
    }
   
   movies.push(newMovie);
   res.status(200)
   .json({msg:`movie with the title ${movie.title} has been added`, TheNewMovie:newMovie});
};

export const searchMovie = (req, res) => {
  const found = movies.some((item) => item.id === req.params.id);
  if (found) {
    res.status(200)
    .json(movies.filter((item) => item.id === req.params.id));
  } else {
    res.status(400).send(`no such a movie with id ${req.params.id}`);
  }
};

export const deleteMovie = (req, res) => {
  const found = movies.some((item) => item.id === req.params.id);
  if (found) {
    res.status(200)
    .json({
      msg: "movie deleted",
      restMovies: movies.filter((item) => item.id !== req.params.id),
    });
  } else {
    res.status(400).send(`no such a movie with id ${req.params.id}`);
  }
};


