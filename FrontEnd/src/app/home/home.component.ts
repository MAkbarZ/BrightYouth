import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  activeSubMenu: string = '';
  
  hazaraActive: boolean = true;
  islamActive: boolean = false;
  politicsActive: boolean = false;
  educationActive: boolean = false;
  sportsActive: boolean = false;
  entertainmentActive: boolean = false;

  todayPersian = '';
  todayArabic = '';
  options: any;
  today: number = Date.now();
  todayDate = new Date(Date.now());

  private myModal = document.getElementById('myModal')!;
  private myInput = document.getElementById('myInput')!;
  


  constructor() {
    // console.log("localStorage.getItem('activeSubMenu') = constructore " + localStorage.getItem('activeSubMenu'));
    this.activeSubMenu = localStorage.getItem('activeSubMenu') ? localStorage.getItem('activeSubMenu')! : '';
    // console.log('this.activeSubMenu - constructore = ' + this.activeSubMenu);
  }

  ngOnInit(): void {
    this.today = Date.now();
    this.todayDate = new Date(Date.now());
    this.options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    this.todayPersian = this.todayDate.toLocaleString('fa-AF', this.options);
    this.todayArabic = this.todayDate.toLocaleString('ar-SA', this.options);

    this.disableMe(null, this.activeSubMenu);

    // this.myModal.addEventListener('shown.bs.modal', () => {
    //   this.myInput.focus();
    // });
  }

  disableMe(event: any, activeSubMenu: string) {
    this.makeActiveBooleanFalse();

    
    if (event === null) {
      if ( activeSubMenu === '') {
        localStorage.setItem('activeSubMenu', '');
      } else {
        this.activeSubMenu = activeSubMenu;
        localStorage.setItem('activeSubMenu', activeSubMenu);
      }
      } else {
        this.activeSubMenu = event.target.name;
        localStorage.setItem('activeSubMenu', event.target.name);
        // console.log('this.activeSubMenu === event.target.name= ' + event.target.name);
    
    }
    // console.log("localStorage.getItem('activeSubMenu') = " + localStorage.getItem('activeSubMenu'));
    

      switch (this.activeSubMenu) {
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
