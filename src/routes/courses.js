const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/coursesController")();
router.get("/create", coursesController.create);
router.get("/:id/edit", coursesController.edit);
router.get("/:slug", coursesController.show);
router.put("/:id", coursesController.update);
router.delete("/:id", coursesController.delete);
router.put("/store", coursesController.store);
  
module.exports = router;
