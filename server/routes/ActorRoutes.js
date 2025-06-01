const { Router } = require("express");
const { addActors, getActors, getActor, updateActor, deleteActor } = require("../controllers/ActorController");

const router = Router();

router.post("/add-actors", addActors);
router.get("/get-actors", getActors);
router.get("/get-actor/:id", getActor);
router.put("/update-actor", updateActor);
router.delete("/delete-actor", deleteActor);

module.exports = router;