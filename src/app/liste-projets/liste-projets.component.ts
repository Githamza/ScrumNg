import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { AjoutprojService } from "../ajoutproj.service";
import { NouveauProjet } from "../models/nouveau-projet";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/merge";
import { DataSource } from "@angular/cdk/collections";

@Component({
  selector: "app-liste-projets",
  templateUrl: "./liste-projets.component.html",
  styleUrls: ["./liste-projets.component.css"]
})
export class ListeProjetsComponent implements OnInit {
  constructor(private ajoutProj: AjoutprojService) {}
  nouveauProjet: NouveauProjet[];
  nouveauProjet2: NouveauProjet[];

  stateExression: string = "inactive";

  ngOnInit() {}

  displayedColumns = ["Nom projet", "Lead Projet", "effectif"];
  dataSource = new UserDataSource(this.ajoutProj);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
  }
}
export class UserDataSource extends DataSource<any> {
  private socket;
  constructor(private ajoutProj: AjoutprojService) {
    super();
  }
  connect(): Observable<NouveauProjet[]> {
    return this.ajoutProj.getAllProj();
  }
  disconnect() {}
}
