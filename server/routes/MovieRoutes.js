const { Router } = require("express");
const { addMovies, getMovies, getMovie, updateMovie, deleteMovie } = require("../controllers/MovieController");

const router = Router();

router.post("/add-movie", addMovies);
router.get("/get-movies", getMovies);
router.get("/get-movie/:id", getMovie);
router.put("/update-movie", updateMovie);
router.delete("/delete-movie", deleteMovie);

module.exports = router;