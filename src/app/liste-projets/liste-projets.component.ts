import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { AjoutprojService } from "../ajoutproj.service";
import { NouveauProjet } from "../models/nouveau-projet";
import { AsyncPipe } from "@angular/common";
@Component({
  selector: "app-liste-projets",
  templateUrl: "./liste-projets.component.html",
  styleUrls: ["./liste-projets.component.css"]
})
export class ListeProjetsComponent implements OnInit {
  constructor(
    private ajoutProj: AjoutprojService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  nouveauProjet: NouveauProjet[];
  stateExression: string = "inactive";

  ngOnInit() {
    this.getAllProj();
  }
  displayedColumns = ["Nom projet", "Lead Projet", "effectif"];
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
    console.log;
    this.changeDetectorRefs.detectChanges();
  }
}
