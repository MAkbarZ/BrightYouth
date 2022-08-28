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

  constructor(
    private userAccountService: UserAccountService,
    
  ) {
    this.userAccountService.user$.subscribe((x) => (this.user = x));

    this.blnUserLogin = (this.user !== null) ? true : false;
  }

  ngOnInit(): void {
    
  } // ========== end of ngOnInit()

 

  logout() {
    this.userAccountService.logout();
  }
}
