var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjSchema   = new Schema({
    nomProj: String,
    leadProj : String,
    descProj : String,
    BesProj: Number,
    pers: [{
        name:String, 
        poste:String
    }],
    backlog: [{
        fonctionnalite:String,
        userStory:String
    }]
});

module.exports = mongoose.model('Projet', ProjSchema);
