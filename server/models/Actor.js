const { Schema, model } = require("mongoose");

const actorSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Actor = model("Actor", actorSchema);

module.exports = Actor;