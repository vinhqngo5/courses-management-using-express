const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");

const sortMiddleware = require("./app/middlewares/sortMiddleware");
const path = require("path");
const app = express();
const port = 3000;

// Connect to database
const db = require("./config/db");
db.connect();

const route = require("./routes");
/**
 * Config static files
 * if use relative path => relative from where to start serving the files
 * => use absolute path instead
 * app.use(express.static("./src/public"));
 */

app.use(express.static(path.join(__dirname, "public")));

// method override middleware
app.use(methodOverride("_method"));

// Apply body parser middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// App self-defined middleware
app.use(sortMiddleware);

// HTTP loggers
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    /**
     * function helper for handlebars
     */
    helpers: require("./helpers/handlebars"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route init
route(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
