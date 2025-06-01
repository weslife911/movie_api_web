const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    actorIds: [
        {
            type: Schema.Types.ObjectId,
            ref: "Actor",
            required: true
        }
    ],
    directorId: {
        type: Schema.Types.ObjectId,
        ref: "Director",
        required: true
    },
}, { timestamps: true });

const Movie = model("Movie", movieSchema);

module.exports = Movie;