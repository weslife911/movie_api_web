const { Router } = require("express");
const { addDirectors, getDirectors, getDirector, updateDirector, deleteDirector } = require("../controllers/DirectorController");

const router = Router();

router.post("/add-directors", addDirectors);
router.get("/get-directors", getDirectors);
router.get("/get-director/:id", getDirector);
router.put("/update-director", updateDirector);
router.delete("/delete-director", deleteDirector);

module.exports = router;