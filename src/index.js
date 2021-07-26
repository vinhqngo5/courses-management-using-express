const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

const route = require("./routes");
/**
 * Config static files
 * if use relative path => relative from where to start serving the files
 * => use absolute path instead
 * app.use(express.static("./src/public"));
 */

app.use(express.static(path.join(__dirname, "public")));

// Apply body parser middleware
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

// HTTP loggers
app.use(morgan("combined"));

// Template engine
app.engine(
	"hbs",
	handlebars({
		extname: ".hbs",
	})
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
route(app);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
