const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    sport: String
})

const Teams = mongoose.model("teams", teamSchema);
module.exports = Teams;