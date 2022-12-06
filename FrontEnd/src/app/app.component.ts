import { Component, OnInit } from '@angular/core';
import { User } from './shared-components/model/user.model';
import { ShoppingService } from './shared-components/service/shopping.service';
import { UserAccountService } from './shared-components/service/user-account.service';

import { GlobalConstant } from './shared-components/types/globaltypes';
// import { FooterComponent } from '././home/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // title = 'FrontEnd';
  title = GlobalConstant.siteTitle;

  blnUserLogin!: boolean;

  user!: User;

  activeMenu: string = '';
  activeSubMenu: string = '';


  homeActive: boolean = false;
  aboutUsActive: boolean = false;
  shoppingActive: boolean = false;
  coursesActive: boolean = false;
  coursesHomeActive: boolean = false;
  infozimeActive: boolean = false;
  toolsActive: boolean = false;

  userProfileActive: boolean = false;
  loginActive: boolean = false;
  registerActive: boolean = false;


  constructor(private userAccountService: UserAccountService) {
    this.userAccountService.user$.subscribe((x) => (this.user = x));

    this.blnUserLogin = this.user !== null ? true : false;

    // console.log("localStorage.getItem('activeSubMenu') = constructore " + localStorage.getItem('activeSubMenu'));
    this.activeMenu = localStorage.getItem('activeMenu') ? localStorage.getItem('activeMenu')! : '';
    this.activeSubMenu = localStorage.getItem('activeSubMenu') ? localStorage.getItem('activeSubMenu')! : '';
    // console.log('this.activeSubMenu - constructore = ' + this.activeMenu);
  }
  
  ngOnInit(): void {
    
    this.disableMe(null, this.activeMenu);
   

  } // ========== end of ngOnInit()

  logout() {
    this.userAccountService.logout();
  }

  disableMe(event: any, activeMenu: string) {
    
    this.makeActiveBooleanFalse();

    
    if (event === null) {
      if ( activeMenu === '') {
        localStorage.setItem('activeMenu', '');
      } else {
        this.activeMenu = activeMenu;
        localStorage.setItem('activeMenu', activeMenu);
      }
      } else {
        this.activeMenu = event.target.name;
        localStorage.setItem('activeMenu', event.target.name);
        // console.log('this.activeMenu === event.target.name= ' + event.target.name);
    
    }
    // console.log("localStorage.getItem('activeMenu') = " + localStorage.getItem('activeMenu'));
    

      switch (this.activeMenu) {
        case navMenuNames.home:
          this.homeActive = true;
          break;
        case navMenuNames.aboutUs:
          this.aboutUsActive = true;
          break;
        case navMenuNames.shopping:
          this.shoppingActive = true;
          break;
        case navMenuNames.courses:
          this.coursesActive = true;
          break;
        case navMenuNames.coursesHome:
        case navMenuNames.kyCustomer:
        case navMenuNames.msExcel:
        case navMenuNames.msWord:
        case navMenuNames.msPowerPoint:
          this.coursesActive = true;
          break;
  
          case navMenuNames.infozime:
            this.infozimeActive = true;
            break;
          case navMenuNames.tools:
            this.toolsActive = true;
            break;
  
        case navMenuNames.userProfile:
          this.userProfileActive = true;
          break;
        case navMenuNames.login:
          this.loginActive = true;
          break;
        case navMenuNames.register:
          this.registerActive = true;
          break;
        case navMenuNames.login:
          this.loginActive = true;
          break;
  
        default:
          this.homeActive = true;
          console.log('home active');
          break;
      } //end of switch

    //} //end of if


  }

  makeActiveBooleanFalse() {
    this.homeActive = false;
    this.aboutUsActive = false;
    this.shoppingActive = false;
    this.coursesActive = false;
    this.coursesHomeActive = false;
    this.infozimeActive = false;
    this.toolsActive = false;

    this.userProfileActive = false;
    this.loginActive = false;
    this.registerActive = false;
  }
}

enum navMenuNames {
  home = 'home',
  aboutUs = 'aboutUs',
  shopping = 'shopping',
  courses = 'courses',
  
  coursesHome = 'coursesHome',
  kyCustomer = 'kyCustomer',
  msExcel = 'msExcel',
  msWord = 'msWord',
  msPowerPoint = 'msPowerPoint',
  
  infozime = 'infozime',
  tools = 'tools',

  userProfile = 'userProfile',
  login = 'login',
  register = 'register'
}
