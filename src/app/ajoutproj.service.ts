import { Injectable } from '@angular/core';
import { NouveauProjet } from './models/nouveau-projet';

@Injectable()
export class AjoutprojService {

  nouveauProjet : NouveauProjet= {
     leadProj: "David" ,
        nomProj: "ProjAgile",
        descProj: "projetcoool",
        besProj: 123,
        pers: [{name:"Hamza",poste:"Dev"},{name:"Clement",poste:"mito"}],
        Fonct: [{fonctionnalite:"login",userStory:"l'utilisateur se connecte"}]
  } ;

  constructor() {
     console.log(this.nouveauProjet.leadProj)

   }
}
