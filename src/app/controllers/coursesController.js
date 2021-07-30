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
  // [GET] /courses/create => trang tạo thêm khóa học
  create(req, res, next) {
    res.render("courses/create");
  }
  // [POST] /courses/store => api lưu khóa học
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then((addedCourse) => res.redirect(`/courses/${addedCourse.slug}`));
  }
}

module.exports = () => new CoursesController();
