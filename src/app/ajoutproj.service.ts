import { Injectable } from '@angular/core';
import { NouveauProjet } from './models/nouveau-projet';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AjoutprojService   {
  apiURL="http://127.0.0.1:8080/api/proj/projets";
  nouveauProjet : NouveauProjet= {
     leadProj: "David" ,
        nomProj: "ProjAgile",
        descProj: "projetcoool",
        besProj: 123,
        pers: [{name:"Hamza",poste:"Dev"},{name:"Clement",poste:"mito"}],
        Backlog: [{fonctionnalite:"login",userStory:"l'utilisateur se connecte"}]
  } ;

  constructor(private http: HttpClient) {

   }

   getAllProj(): Observable<NouveauProjet[]> {

       return this.http.get<NouveauProjet[]>('http://127.0.0.1:8080/api/proj/projets');
  



   }
 /*  private handleError ( response: HttpResponse): Observable<any> {
     let errorMessage= `${response.status} - ${response.statusText}`;
     return Observable.throw(errorMessage);
   }*/


}
