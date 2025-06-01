require("dotenv").config();

const { connect } = require("mongoose");

const connectToDB = () => {
    connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongo DB connected successfully"))
    .catch((e) => console.log(e.message));
};

module.exports = connectToDB;