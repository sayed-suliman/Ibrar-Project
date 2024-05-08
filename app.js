const express = require("express");
const hbs = require("hbs");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const crypto = require('crypto');
const session = require('express-session');

// databse connection
// Function to generate a random secret key
const generateSecretKey = () => {
    return crypto.randomBytes(16).toString('hex');
};

require("dotenv").config({
    path: path.resolve(__dirname, ".env")
});
const port = process.env.PORT;

require("./src/db/connection");
require("./src/utils/hbsHelper");
// express session
// Set up session middleware
app.use(session({
    secret: generateSecretKey(),  // Secret key for session encryption
    resave: false,
    saveUninitialized: true
}));

// app all data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// flash images
app.use(flash());
app.use(function (req, res, next) {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
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
