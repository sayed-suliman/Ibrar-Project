const express = require("express");
const hbs = require("hbs");
const path = require('path');
const app = express();
require("dotenv").config({
    path: path.resolve(__dirname, "/", ".env")
});
const port = process.env.PORT || 3000;

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
