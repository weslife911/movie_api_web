const { Schema, model } = require("mongoose");

const directorSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Director = model("Director", directorSchema);

module.exports = Director;