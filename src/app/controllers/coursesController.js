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
  // [GET] /courses/_id/edit => trang tạo sửa khóa học
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
  // [PUT] /courses/:id => put sửa khóa học
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then((course) => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  // [DELETE] /courses/:id => xóa khóa học
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then((course) => res.redirect("back"))
      .catch(next);
  }
  // [DELETE] /courses/:id/force => xóa khóa học vĩnh viễn
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then((course) => res.redirect("back"))
      .catch(next);
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
  // [PATCH] /courses/store => restore khóa học đã xóa
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then((course) => res.redirect("back"))
      .catch(next);
  }
  // [POST] /courses/handle-form-actions =>
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then((course) => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json({ message: "Invalid Action!!!" });
    }
  }
}

module.exports = () => new CoursesController();
