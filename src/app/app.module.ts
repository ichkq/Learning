import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { FormsModule } from '@angular/forms';
import { SingleraceComponent } from './singlerace/singlerace.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';

const appRoutes: Routes = [
  { path: 'caracteristiques', component: SingleraceComponent },
  { path: 'races', component: RacesComponent },
  { path: 'authentification', component: AuthentificationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RacesComponent,
    SingleraceComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
