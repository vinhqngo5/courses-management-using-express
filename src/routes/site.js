/* Có một số phần như home, contact, ..
đều nằm trong "/" => tạo site.js để route 
*/

const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/siteController")();
router.get("/search", siteController.search);
router.get("/", siteController.index);

module.exports = router;
