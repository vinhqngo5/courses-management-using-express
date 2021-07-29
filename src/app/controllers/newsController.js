class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug => slug biến động => nhận giá trị ngẫu nhiên
  show(req, res) {
    res.send("New details");
  }
}

module.exports = () => new NewsController();
/**
 * if module.exports = new NewsController()
 * => Only create one instance
 * => Return a function to create instance
 */
