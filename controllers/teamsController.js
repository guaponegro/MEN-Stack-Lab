const mongoose = require("mongoose");
const router = express.Router();
const Teams = require("../models/teams");

// Index Route
router.get("/teams", (req, res) => {
    Teams.find({}, (err, teams) => {
        if(err){
            console.log(err);
        }else {
            console.log(teams);
            res.render("index.ejs");
        }
    });
});

// New Route







