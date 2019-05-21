import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { HomeComponent } from './components/home/home.component';
import { UnitsComponent } from './components/units/units.component';
import { TzimersComponent } from './components/tzimers/tzimers.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:'allApartments',
    component:ApartmentsComponent
  },
  {
    path:'allUnits',
    component:UnitsComponent
  },
  {
    path:'allTzimers',
    component:TzimersComponent
    
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
