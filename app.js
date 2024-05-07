const express = require("express");
const hbs = require("hbs");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const flash = require('connect-flash');
// databse connection


require("dotenv").config({
    path: path.resolve(__dirname, ".env")
});
const port = process.env.PORT;

require("./src/db/connection");
require("./src/utils/hbsHelper");

// app all data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// flash images
app.use(flash());
app.use(function (req, res, next) {
    res.locals.success = req.flash("success");
    next();
})



// Setup hbs as template engine
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "src", "views", "partials"));

// Setup static files
app.use(express.static(path.join(__dirname, "src", "public")));

// Setup views
app.set("views", path.join(__dirname, "src", "views"));

// Setup routes
const routes = require("./src/routes");
app.use("/", routes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
