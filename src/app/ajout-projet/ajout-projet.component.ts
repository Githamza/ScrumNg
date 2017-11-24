import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ajout-projet',
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.css']
})
export class AjoutProjetComponent implements OnInit {
isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      leadProj: ['', Validators.required],
      nomProj: ['', Validators.required],
      descProj: ['', Validators.required],
      besProj: ['', Validators.required],
      
    });
    this.secondFormGroup = this._formBuilder.group({
      pers: this._formBuilder.array([ this.createItem()])
    });

    this.thirdFormGroup = this._formBuilder.group({
      backlog : this._formBuilder.array([ this.createFonct()])
    });
        console.log(this.secondFormGroup);

  }
  createItem(): FormGroup {
  return this._formBuilder.group({
    name: ['', Validators.required],
    poste: ['', Validators.required],
  });
  }

  createFonct(): FormGroup {
  return this._formBuilder.group({
    fonctionnalite: ['', Validators.required],
    userStory: ['', Validators.required],
  });


}
  deleteItem(index: number) {
        const control = <FormArray>this.secondFormGroup.controls['pers'];
        control.removeAt(index);
    }

	addItem(): void {
        const control = < FormArray > this.secondFormGroup.controls['pers'];
  		control.push(this.createItem());
}

}
