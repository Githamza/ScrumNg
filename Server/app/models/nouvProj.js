var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjSchema = new Schema({
  leadProj: String,
  nomProj: String,
  descProj: String,
  BesProj: Number,
  pers: [
    {
      name: String,
      poste: String
    }
  ],
  backlog: { fonctionnalite: [String], userStory: [String] }
});

module.exports = mongoose.model("Projet", ProjSchema);
