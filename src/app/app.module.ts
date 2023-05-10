import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { FormsModule } from '@angular/forms';
import { SingleraceComponent } from './singlerace/singlerace.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'caracteristiques', component: SingleraceComponent },
  { path: 'races', component: RacesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RacesComponent,
    SingleraceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
