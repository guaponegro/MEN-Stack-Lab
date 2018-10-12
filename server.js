const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// Controller
const bballTeamController = require("");



app.listen(port, () => {
    console.log(`listening to port ${port}`)
})