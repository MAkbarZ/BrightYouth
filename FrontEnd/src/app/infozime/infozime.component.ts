import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infozime',
  templateUrl: './infozime.component.html',
  styleUrls: ['./infozime.component.scss']
})
export class InfozimeComponent implements OnInit {

  activeSubMenuInfoZime: string = '';

  mainActive: boolean = true;
  storeActive: boolean = false;
  granceeActive: boolean = false;
  knowKarachiActive: boolean = false;
  bizMarketingActive: boolean = false;
  aboutActive: boolean = false;


  constructor() {
    console.log("localStorage.getItem('activeSubMenuInfoZime') = constructore " + localStorage.getItem('activeSubMenuInfoZime'));
    this.activeSubMenuInfoZime = localStorage.getItem('activeSubMenuInfoZime') ? localStorage.getItem('activeSubMenuInfoZime')! : '';
    console.log('this.activeSubMenuInfoZime - constructore = ' + this.activeSubMenuInfoZime);
  }


  ngOnInit(): void {
    this.disableMe(null, this.activeSubMenuInfoZime);
  }

  disableMe(event: any, activeSubMenuInfoZime: string) {
    this.makeActiveBooleanFalse();

    
    if (event === null) {
      if ( activeSubMenuInfoZime === '') {
        localStorage.setItem('activeSubMenuInfoZime', '');
      } else {
        this.activeSubMenuInfoZime = activeSubMenuInfoZime;
        localStorage.setItem('activeSubMenuInfoZime', activeSubMenuInfoZime);
      }
      } else {
        this.activeSubMenuInfoZime = event.target.name;
        localStorage.setItem('activeSubMenuInfoZime', event.target.name);
        // console.log('this.activeSubMenuInfoZime === event.target.name= ' + event.target.name);
    
    }
    // console.log("localStorage.getItem('activeSubMenuInfoZime') = " + localStorage.getItem('activeSubMenuInfoZime'));
    

      switch (this.activeSubMenuInfoZime) {
      case navMenuNames.main:
        this.mainActive = true;
        break;
      case navMenuNames.store:
        this.storeActive = true;
        break;
      case navMenuNames.grancee:
        this.granceeActive = true;
        break;
      case navMenuNames.knowKarachi:
        this.knowKarachiActive = true;
        break;
      case navMenuNames.bizMarketing:
        this.bizMarketingActive = true;
        break;
      case navMenuNames.about:
        this.aboutActive = true;
        break;

      default:
        this.mainActive = true;
        break;
    }
  }

  makeActiveBooleanFalse() {
    this.mainActive = false;
    this.storeActive = false;
    this.granceeActive = false;
    this.knowKarachiActive = false;
    this.bizMarketingActive = false;
    this.aboutActive = false;
  }
}

enum navMenuNames {
  main = 'main',
  store = 'store',
  grancee = 'grancee',
  knowKarachi = 'knowKarachi',
  bizMarketing = 'bizMarketing',
  about = 'about',

}