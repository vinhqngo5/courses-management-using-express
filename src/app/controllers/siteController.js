const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../utils/mongoose");
class SiteController {
  // [GET] /
  index(req, res, next) {
    // res.render("home");
    /**
     * use callback
     */
    /*Course.find({}, (err, courses) => {
      if (!err) res.json(courses);
      else next(err);
    });*/
    /**
     * use promise
     */
    Course.find({})
      .then((courses) => {
        courses = multipleMongooseToObject(courses);
        res.render("home", {
          courses,
        });
      })
      .catch((error) => next(error));
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
