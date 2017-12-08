import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { AjoutprojService} from '../ajoutproj.service';
import { NouveauProjet } from '../models/nouveau-projet';
import { trigger,state, style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrls: ['./liste-projets.component.css'],
   /*animations: [

      trigger('goals', [
        state('inactive', style({
          height: '300px'
      })),
        state('expended', style({
          height: '0px'
      })),
      transition ('inactive <=> expended',animate('200ms ease-out'))
      
      ])
    ]*/
})
    export class ListeProjetsComponent implements OnInit {

      constructor(private ajoutProj: AjoutprojService) { }
      nouveauProjet: NouveauProjet[];
      stateExression : string='inactive';

     
      ngOnInit(){
     this.getAllProj();
      }
      displayedColumns = ['name'];
      dataSource = new MatTableDataSource<NouveauProjet>(this.nouveauProjet);

      applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }

      getAllProj() {
        this.ajoutProj.getAllProj().subscribe(
          response => {
          this.dataSource = new MatTableDataSource<NouveauProjet>(response);
          },
          error => console.log(error)
        );
      }
      anim() {
        if(this.stateExression === 'inactive')
        this.stateExression ='expended';
        else 
        this.stateExression = 'inactive';
      }
    }




   