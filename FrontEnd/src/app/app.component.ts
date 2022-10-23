import { Component, OnInit } from '@angular/core';
import { User } from './shared-components/model/user.model';
import { ShoppingService } from './shared-components/service/shopping.service';
import { UserAccountService } from './shared-components/service/user-account.service';

import { GlobalConstant } from './shared-components/types/globaltypes';

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

  homeActive: boolean = true;
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
  }

  ngOnInit(): void {} // ========== end of ngOnInit()

  logout() {
    this.userAccountService.logout();
  }

  disableMe(event: any) {
    // console.log((event.target as HTMLAnchorElement).innerHTML);
    // console.log(event.target.name);
    this.makeActiveBooleanFalse();

    switch (event.target.name) {
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
        break;
    }
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
