// Pull in required dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(process.cwd() + "/public"));

// parse application/json

app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgersController.js");
app.use('/',routes);

app.listen(PORT, () => {
    console.log("App listening on: http://localhost:" + PORT);
});