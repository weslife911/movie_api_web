const Actor = require("../models/Actor");

const addActors = async(req, res) => {
    try {

        const { name } = req.body;

        const actor = await Actor.findOne(name);

        if(actor) {
            return res.json({
                success: false,
                message: "Actor already exists!"
            });
        }

        const newActor = await Actor({
            name
        });

        if(newActor) {
            await newActor.save();
            return res.json({
                success: true,
                message: "Actor added successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Error while adding actor!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getActors = async(req, res) => {
    try {

        const actors = await Actor.find({});

        if(actors) {
            return res.json(actors);
        } else {
            return res.json({
                success: false,
                message: "Error while getting actors!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getActor = async(req, res) => {
    try {

        const { id } = req.params;
        
        const actor = await Actor.findById(id);

        if(actor) {
            return res.json(actor);
        } else {
            return res.json({
                success: false,
                message: "Actor with given ID does not exist!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const updateActor = async(req, res) => {
    try {

        const { id, name } = req.body;

        const updateActor = await Actor.findByIdAndUpdate(id, {
            $set: { name },
        }, { new: true });

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const deleteActor = async(req, res) => {
    try {

        const { id } = req.body;
        
        const actor = await Actor.findByIdAndDelete(id);

        if(actor) {
            return res.json({
                success: true,
                message: "Actor deleted successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Actor with given ID does not exist!"
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
    addActors,
    getActors,
    getActor,
    updateActor,
    deleteActor
};