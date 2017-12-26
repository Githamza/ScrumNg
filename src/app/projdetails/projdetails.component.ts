import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NouveauProjet } from "../models/nouveau-projet";
import { AjoutprojService } from "../ajoutproj.service";
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-projdetails',
  templateUrl: './projdetails.component.html',
  styleUrls: ['./projdetails.component.css']
})
export class ProjdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ajoutProj: AjoutprojService) { }
  Projet: NouveauProjet[];
  id: String;
  ngOnInit() {
 
       // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
;
   
    this.getprojbyId(this.id);
    console.log(this.Projet);
    
 
  }


  getprojbyId(id) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ajoutProj.getProj(id).subscribe(
      response=> { this.Projet=response;
      console.log(this.Projet)},
      error =>console.log(error)
    );
      }
    

  
}