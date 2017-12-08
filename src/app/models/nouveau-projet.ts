    export interface NouveauProjet {
        leadProj: String ;
        nomProj: String;
        descProj: String;
        besProj: Number;
        pers: [Personnes];
        Backlog: [Fonctionnalite]
    }

    export interface Personnes {
        name: String;
        poste:String
    }
    export interface Fonctionnalite {
        fonctionnalite: String;
        userStory: String 
    }