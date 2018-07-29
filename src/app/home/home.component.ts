import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  intro = 'This is project made for phase 2 of the July challenge.';

  what = 'This is made using Angular 6, Bootstrap 4, all the cool stuff learnt from class, from Googling, and sleepless nights because I am addicted.';


  ngOnInit() {
  }

}
