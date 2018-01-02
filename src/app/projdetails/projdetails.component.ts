import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NouveauProjet } from "../models/nouveau-projet";
import { AjoutprojService } from "../ajoutproj.service";
import { Response } from "@angular/http/src/static_response";
import * as io from "socket.io-client";

@Component({
  selector: "app-projdetails",
  templateUrl: "./projdetails.component.html",
  styleUrls: ["./projdetails.component.css"]
})
export class ProjdetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ajoutProj: AjoutprojService
  ) {}
  Projet: NouveauProjet[];
  private socket;
  ngOnInit() {
    this.getprojbyId();
  }
  getEvent(e) {
    console.log(e);
  }
  getprojbyId() {
    this.socket = io("http://localhost:8081");
    this.socket.on("event", function(evt) {
      console.log(evt);
    });
    let id = this.route.snapshot.paramMap.get("id");
    this.ajoutProj.getProj(id).subscribe(
      response => {
        this.Projet = response;
      },
      error => console.log(error)
    );
  }
}
