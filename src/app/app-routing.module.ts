import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// home comp
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // path to home
  // current next
  // forecast
  // about
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
