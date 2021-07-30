const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/coursesController")();
router.get("/create", coursesController.create);
router.get("/:slug", coursesController.show);
router.post("/store", coursesController.store);

module.exports = router;
