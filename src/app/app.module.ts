import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { FonctionnaliteComponent } from './fonctionnalite/fonctionnalite.component';


@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    AjoutProjetComponent,
    FonctionnaliteComponent,
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatToolbarModule,MatStepperModule,MatInputModule,ReactiveFormsModule,MatMenuModule,MatButtonModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
