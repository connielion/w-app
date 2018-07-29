import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// home comp
import { HomeComponent } from './home/home.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // path to home
  { path: 'current', component: CurrentComponent },
  { path: 'forecast', component: ForecastComponent},
  // about
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
