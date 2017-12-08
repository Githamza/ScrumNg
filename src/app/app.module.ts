import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { AjoutprojService } from './ajoutproj.service'
import {MatCardModule} from '@angular/material/card';


import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { ProjetscardsComponent } from './projetscards/projetscards.component';

const appRoutes: Routes = [
  { path: 'ProjetsList', component: ListeProjetsComponent },
  { path: 'nouveauproj', component: AjoutProjetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    AjoutProjetComponent,
    ListeProjetsComponent,
    ProjetscardsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    HttpModule,  
    MatCardModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AjoutprojService],
  bootstrap: [AppComponent]
})
export class AppModule { }
