const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const meRouter = require("./me");
function route(app) {
  // Route handlers

  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);

  /*
    Before split like MVC model
    --------------------------------
	app.get("/", (req, res) => {
		res.render("home");
	});

	app.get("/news", (req, res) => {
		res.render("news");
	});

	app.get("/search", (req, res) => {
		console.log(req.query);
		res.render("search");
	});
	app.post("/search", (req, res) => {
		console.log(req.body);
		res.send("hehe");
	});
    */
}
module.exports = route;
