import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hazaraActive: boolean = true;
  islamActive: boolean = false;
  politicsActive: boolean = false;
  educationActive: boolean = false;
  sportsActive: boolean = false;
  entertainmentActive: boolean = false;

  // todayGreg = '';
  todayPersian = '';
  todayArabic = '';
  // optionGreg: any;
  options: any;
  today: number = Date.now();
  todayDate = new Date(Date.now());

  constructor() {}

  ngOnInit(): void {
    this.today = Date.now();
    this.todayDate = new Date(Date.now());
    // this.optionGreg = {
    //   weekday: 'medium',
    //   year: 'numeric',
    //   month: 'medium',
    //   day: 'numeric',
    // };
    this.options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    // this.todayGreg = this.todayDate.toLocaleString('en-UK', this.optionGreg);
    this.todayPersian = this.todayDate.toLocaleString('fa-AF', this.options);
    this.todayArabic = this.todayDate.toLocaleString('ar-SA', this.options);
  }

  disableMe(event: any) {
    this.makeActiveBooleanFalse();

    switch (event.target.name) {
      case navMenuNames.hazara:
        this.hazaraActive = true;
        break;
      case navMenuNames.islam:
        this.islamActive = true;
        break;
      case navMenuNames.politics:
        this.politicsActive = true;
        break;
      case navMenuNames.education:
        this.educationActive = true;
        break;
      case navMenuNames.sports:
        this.sportsActive = true;
        break;
      case navMenuNames.entertainment:
        this.entertainmentActive = true;
        break;

      default:
        this.hazaraActive = true;
        break;
    }
  }

  makeActiveBooleanFalse() {
    this.hazaraActive = false;
    this.islamActive = false;
    this.politicsActive = false;
    this.educationActive = false;
    this.sportsActive = false;
    this.entertainmentActive = false;
  }
}

enum navMenuNames {
  hazara = 'hazara',
  islam = 'islam',
  politics = 'politics',
  education = 'education',
  sports = 'sports',
  entertainment = 'entertainment',

}
