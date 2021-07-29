class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
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
