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

  strTotalItem!: string;
  blnUserLogin!: boolean;

  user!: User;

  constructor(
    private userAccountService: UserAccountService,
    private shoppingService: ShoppingService
  ) {
    this.userAccountService.user$.subscribe((x) => (this.user = x));

    this.blnUserLogin = (this.user !== null) ? true : false;
  }

  ngOnInit(): void {
    this.srvGetAllProducts();
  } // ========== end of ngOnInit()

  srvGetAllProducts() {
    this.shoppingService.getProducts().subscribe({
      next: (res: any) => {
        this.strTotalItem = res.length;
        // console.log("total Item "+this.totalItem);
        // console.log("res "+res);
        // console.log("lenght "+res.length);
      },
      error: (err: any) => {
        console.log(`Unable to get Products from Shopping Service ${err}`);
      },
      complete: () => {
        console.log('Products loaded successfully.');
      },
    });
  } // ========== end of srvGetAllProducts()

  logout() {
    this.userAccountService.logout();
  }
}
