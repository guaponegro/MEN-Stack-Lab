const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Controller
// const bballTeamController = require("");


const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})