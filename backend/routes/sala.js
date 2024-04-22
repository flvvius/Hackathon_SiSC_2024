const express = require("express");
const router = express.Router();

const { salaController } = require("../controllers");
const { checkAuth } = require("../middlewares/checkAuth");

router.get("/getAll", [checkAuth, salaController.getAll]);
router.get("/:id", [checkAuth, salaController.getSalaById]);
router.post("/add", [checkAuth, salaController.addSala]);

module.exports = router;
