import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infozime',
  templateUrl: './infozime.component.html',
  styleUrls: ['./infozime.component.scss']
})
export class InfozimeComponent implements OnInit {

  mydate:any;
  constructor() {
    this.mydate = Date.now();
   }

  ngOnInit(): void {
    this.mydate = Date.now();
  }

}
