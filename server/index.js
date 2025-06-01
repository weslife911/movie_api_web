require("dotenv").config();

const express = require("express");
const connectToDB = require("./database/db");
const movieRoutes = require("./routes/MovieRoutes");
const actorRoutes = require("./routes/ActorRoutes");
const directorRoutes = require("./routes/DirectorRoutes");

const app = express();

app.use(express.json());

const PORT = Number(process.env.PORT) || 8080;

connectToDB();

app.use("/api/movies", movieRoutes);
app.use("/api/actors", actorRoutes);
app.use("/api/directors", directorRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});