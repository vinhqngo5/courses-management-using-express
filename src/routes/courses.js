const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/coursesController")();
// router.get("/test", coursesController.test);
router.get("/create", coursesController.create);
router.get("/:id/edit", coursesController.edit);
router.get("/:slug", coursesController.show);
router.put("/:id", coursesController.update);
router.patch("/:id/restore", coursesController.restore);
router.delete("/:id/force", coursesController.forceDelete);
router.delete("/:id", coursesController.delete);
router.post("/store", coursesController.store);
  
module.exports = router;
