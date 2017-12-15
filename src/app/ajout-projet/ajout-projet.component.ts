import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { NouveauProjet } from "../models/nouveau-projet";
import "rxjs/add/operator/toPromise";
import { AjoutprojService } from "../ajoutproj.service";

@Component({
  selector: "app-ajout-projet",
  templateUrl: "./ajout-projet.component.html",
  styleUrls: ["./ajout-projet.component.css"]
})
export class AjoutProjetComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  nouveauProjet: NouveauProjet;
  constructor(
    private _formBuilder: FormBuilder,
    private ajoutProj: AjoutprojService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      leadProj: ["", Validators.required],
      nomProj: ["", Validators.required],
      descProj: ["", Validators.required],
      besProj: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      pers: this._formBuilder.array([this.createItem()])
    });

    this.thirdFormGroup = this._formBuilder.group({
      backlog: this._formBuilder.array([this.createFonct()])
    });
    this.thirdFormGroup = this._formBuilder.group({
      backlog: this._formBuilder.array([this.createUserStory()])
    });

    console.log(this.thirdFormGroup);
  }

  createItem(): FormGroup {
    return this._formBuilder.group({
      name: ["", Validators.required],
      poste: ["", Validators.required]
    });
  }

  createFonct(): FormGroup {
    return this._formBuilder.group({
      fonctionnalite: ["", Validators.required]
    });
  }
  createUserStory(): FormGroup {
    return this._formBuilder.group({
      userStory: ["", Validators.required]
    });
  }
  deleteItem(index: number) {
    const control = <FormArray>this.secondFormGroup.controls["pers"];
    control.removeAt(index);
  }

  deleteFonc(index: number) {
    const control = <FormArray>this.thirdFormGroup.controls.controls[
      "fonctionnalite"
    ];
    control.removeAt(index);
  }
  deleteUserStory(index: number) {
    const control = <FormArray>this.thirdFormGroup.controls.controls[
      "userStory"
    ];
    control.removeAt(index);
  }
  addItem(): void {
    const control = <FormArray>this.secondFormGroup.controls["pers"];
    control.push(this.createItem());
  }

  addFonc(): void {
    const control = <FormArray>this.thirdFormGroup.controls.controls[
      "fonctionnalite"
    ];
    control.push(this.createFonct());
  }
  addUserStory(): void {
    const control = <FormArray>this.thirdFormGroup.controls.controls[
      "userStory"
    ];
    control.push(this.createFonct());
  }

  addProjet() {
    this.nouveauProjet = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value
    };
    console.log(this.nouveauProjet);
    this.ajoutProj
      .addProj(this.nouveauProjet)
      .toPromise()
      .then(res => {
        console.log(res.message);
      });
  }
}
