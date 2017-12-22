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
      Fonctionnalite: this._formBuilder.array([this.createFonct()]),
      UserStory: this._formBuilder.array([this.createUserStory()])
    });
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
    const control = <FormArray>this.thirdFormGroup.controls["Fonctionnalite"];
    control.removeAt(index);
  }
  deleteUserStory(index: number) {
    const control = <FormArray>this.thirdFormGroup.controls["UserStory"];
    control.removeAt(index);
  }
  addItem(): void {
    const control = <FormArray>this.secondFormGroup.controls["pers"];
    control.push(this.createItem());
  }

  addFonc(): void {
    const control = <FormArray>this.thirdFormGroup.controls["Fonctionnalite"];
    control.push(this.createFonct());
  }
  addUserStory(): void {
    const control = <FormArray>this.thirdFormGroup.controls["UserStory"];
    control.push(this.createUserStory());
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
