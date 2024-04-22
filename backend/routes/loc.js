const express = require("express");
const router = express.Router();

const { locController } = require("../controllers");
const { checkAuth } = require("../middlewares/checkAuth");

router.get("/getAll", [checkAuth, locController.getAll]);
router.get("/get/:id", [checkAuth, locController.getLocBySala]);
router.post("/add", [checkAuth, locController.addLoc]);

module.exports = router;
