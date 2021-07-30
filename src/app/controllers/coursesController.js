const Course = require("../models/Courses");
const { mongooseToObject } = require("../../utils/mongoose");
class CoursesController {
  // [GET] /courses/:slug => slug biến động => nhận giá trị ngẫu nhiên
  show(req, res, next) {
    Course.findOne({
      slug: req.params.slug,
    })
      .then((course) => {
        course = mongooseToObject(course);
        res.render("courses/show", { course });
      })
      .catch(next);
  }
}

module.exports = () => new CoursesController();
