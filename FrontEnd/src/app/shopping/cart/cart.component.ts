import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared-components/model/product.model';
import { ShoppingService } from 'src/app/shared-components/service/shopping.service';
import { GlobalConstant } from 'src/app/shared-components/types/globaltypes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  baseUrlImage:string = GlobalConstant.apiBaseURLImage;
  
  public productsArray: Product[] = [];
  public numGrandTotal: number = 0;

  isReadMore:boolean = true;

  hasCheckedOut:boolean = false;
 

  constructor(private shoppingService: ShoppingService) {}

    ngOnInit(): void {
    // this.srvGetAllProducts();

    this.shoppingService.getProducts().subscribe({
      next: (res) => {
        this.productsArray = (res);
        // console.log('got item in the cart');
        // console.log(this.productsArray);
        this.numGrandTotal = this.shoppingService.getTotalPrice();
        
      },
       error: (err: any) => {
        console.log(`Unable to get Products from Shopping Service ${err}`);
      },
      complete: () => {
        console.log('Products in the Cart loaded successfully.');
      }
    });

  } // ========== end of ngOnInit()

  srvGetAllProducts() {
    this.shoppingService.getProducts().subscribe({
      next: (res) => {
        this.productsArray.push(...res);
        // console.log('got item in the cart');
        // console.log(this.productsArray);
        this.numGrandTotal = this.shoppingService.getTotalPrice();
      },
       error: (err: any) => {
        console.log(`Unable to get Products from Shopping Service ${err}`);
      },
      complete: () => {
        console.log('Products in the Cart loaded successfully.');
      }
    });

    
  } // ========== end of srvGetAllProducts()

  // removeItem(product: Product) {
  //   // console.log('product to remove');
  //   // console.log(product);
  //   this.shoppingService.removeCartItem(product);
  // }

   removeItem(productId: number) {
    // console.log('product to remove');
    // console.log(product);
    this.shoppingService.removeCartItem(productId);
  }

  emptyCart() {
    this.shoppingService.removeAll();
  }


  
}
