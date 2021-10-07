import express from "express";
import {
  getMovies,
  addMovie,
  searchMovie,
  deleteMovie,
} from "../controllers/app.js";
const router = express.Router();

//get movie
router.get("/", getMovies);

//add movie
router.post("/", addMovie);
//search movie (get one)

router.get("/:id", searchMovie);
// remove movie

router.delete("/:id", deleteMovie);

export default router;
