import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CompetencesComponent } from './features/competences/competences.component';
import { ProjetsComponent } from './features/projets/projets.component';
import { ContactComponent } from './features/contact/contact.component';
import { NavComponent } from './features/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetencesComponent,
    ProjetsComponent,
    ContactComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
