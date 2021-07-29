const Course = require("../models/Courses");
class SiteController {
  // [GET] /
  index(req, res) {
    // res.render("home");
    Course.find({}, (err, courses) => {
      if (!err) res.json(courses);
      else res.status("500").json({ error: "Error!" });
    });
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = () => new SiteController();
/**
 * if module.exports = new NewsController()
 * => Only create one instance
 * => Return a function to create instance
 */
