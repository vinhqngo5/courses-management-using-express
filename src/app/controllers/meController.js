const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../utils/mongoose");
class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = multipleMongooseToObject(courses);
        res.render("me/stored-courses", { courses });
      })
      .catch(next);
  }
}

module.exports = () => new MeController();
/**
 * if module.exports = new NewsController()
 * => Only create one instance
 * => Return a function to create instance
 */
