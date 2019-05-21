import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { UnitsComponent } from './components/units/units.component';
import { TzimersComponent } from './components/tzimers/tzimers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApartmentsComponent,
    UnitsComponent,
    TzimersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
