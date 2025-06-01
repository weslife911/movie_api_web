const Director = require("../models/Director");

const addDirectors = async(req, res) => {
    try {

        const { name } = req.body;

        const director = await Director.findOne(name);

        if(director) {
            return res.json({
                success: false,
                message: "Director already exists!"
            });
        }

        const newDirector = await Director({
            name
        });

        if(newDirector) {
            await newDirector.save();
            return res.json({
                success: true,
                message: "Director added successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Error while adding director!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getDirectors = async(req, res) => {
    try {

        const directors = await Director.find({});

        if(directors) {
            return res.json(directors);
        } else {
            return res.json({
                success: false,
                message: "Error while getting directors!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getDirector = async(req, res) => {
    try {

        const { id } = req.params;
        
        const director = await Director.findById(id);

        if(director) {
            return res.json(director);
        } else {
            return res.json({
                success: false,
                message: "Director with given ID does not exist!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const updateDirector = async(req, res) => {
    try {

        const { id, name } = req.body;

        await Director.findByIdAndUpdate(id, {
            $set: { name },
        }, { new: true });

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const deleteDirector = async(req, res) => {
    try {

        const { id } = req.body;
        
        const director = await Director.findByIdAndDelete(id);

        if(director) {
            return res.json({
                success: true,
                message: "Director deleted successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Director with given ID does not exist!"
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
    addDirectors,
    getDirectors,
    getDirector,
    updateDirector,
    deleteDirector
};