import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared-components/model/user.model';
import { ShoppingService } from 'src/app/shared-components/service/shopping.service';
import { UserService } from 'src/app/shared-components/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  strTotalItem: string = '';
  blnUserLogin: boolean = false;

  // user: User = new User;

  constructor(
    private userService: UserService,
    private shoppingService: ShoppingService
  ) {
    // this.userService.user$.subscribe(res => this.user = res);
    this.userService.user$.subscribe((res) =>
      res === null ? (this.blnUserLogin = true) : (this.blnUserLogin = false) );
  }

  ngOnInit(): void {
    this.srvGetAllProducts();
  } // ========== end of ngOnInit()

  // just call method of shopping service
  // - get products which is already populated by addToCart() in shopping component.
  // - get the totalitem.

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
    // this.userService.logout();
  }
}
