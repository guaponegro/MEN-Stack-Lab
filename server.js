const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
require("./db/db");


// Controller
// const teamsController = require("./controllers/teamsController");


// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
// app.use("/teams", teamsController);



const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})