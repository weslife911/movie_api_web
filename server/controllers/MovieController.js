const Movie = require("../models/Movie");

const addMovies = async(req, res) => {
    try {

        const { title, year, genre, actorIds, directorId } = req.body;

        const checkTitle = await Movie.findOne(title);

        if(checkTitle) return res.json({
            success: false,
            message: "Movie with same title already exists!"
        });

        const newMovie = await Movie({
            title,
            year,
            genre,
            actorIds,
            directorId
        });

        if(newMovie) {
            await newMovie.save();
            return res.json({
                success: true,
                message: "Movie added successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Error while adding movies!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getMovies = async(req, res) => {
    try {

        const movies = await Movie.find({});

        if(movies) {
            return res.json(movies);
        } else {
            return res.json({
                success: false,
                message: "Error while getting movie!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getMovie = async(req, res) => {
    try {

        const { id } = req.params;

        const movie = await Movie.findById(id);

        if(movie) {
            return res.json(movie);
        } else {
            return res.json({
                success: false,
                message: "Movie with given ID does not exist!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const updateMovie = async(req, res) => {
    try {

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const deleteMovie = async(req, res) => {
    try {

        const { id } = req.body;

        const movie = await Movie.findByIdAndDelete(id);

        if(movie) {
            return res.json({
                success: true,
                message: "Movie deleted successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Movie with given ID does not exist!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

module.exports = {
    addMovies,
    getMovies,
    getMovie,
    updateMovie,
    deleteMovie
};