import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product.model';

import { ApiShoppingService } from './api-shopping.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private productsArray$ = new BehaviorSubject<Product[]>([]);
  public strSearch$ = new BehaviorSubject<string>('');
  
  public productsInCartArray: Product[] = [];

  private totalItem:number = 0;

  constructor(private api: ApiShoppingService) {
   }

  
  getProducts() {
    return this.productsArray$.asObservable();        
  }

   // TODO: WE HAVEN'T USED THIS METHOD YET.
  setProduct(product: Product[]) {
    this.productsInCartArray.push(...product);
    this.productsArray$.next(product);
  }


  // TODO: WE HAVEN'T USED THIS METHOD YET.
  /*
  apiGetAllProducts() {
    this.api.getProducts().subscribe({
      next: (res) => {
        this.products=res;
        // this.totalItem = this.products.length;
       return res;          
      },
      error: (err:any) => {
        console.log(`Unable to load Products from server ${err}`);
      },
      complete: () => {
        console.log('Products loaded successfully.');
        // this.products.forEach((a:any) => {
        //   Object.assign(a, { quantity: 1, total: a.price });
        // });
      }

    }); 
  } // ========== end of apiGetAllProducts()
 */

  addToCart(product: Product) {
    this.productsInCartArray.push(product);
    this.productsArray$.next(this.productsInCartArray);
    this.getTotalPrice();
  }

  getTotalPrice():number {
    let grandTotal = 0;
    this.productsInCartArray.map((a:any)=>{
      grandTotal += a.total;
    });
    return grandTotal;
  }

  // removeCartItem(product: Product) {
  //   this.productsInCartArray.forEach(product, i)=>{

  //   });
  //   // this.productsInCartArray.map((a:Product, index:any)=>{
  //   //   if(product.id === a.id) {
  //   //     // console.log(this.productsInCartArray);
  //   //     this.productsInCartArray.splice(index, 1);
  //   //     // console.log(this.productsInCartArray);
  //   //   }
  //   });
  //   this.productsArray$.next(this.productsInCartArray);

  // }

  removeCartItem(productid: number) {
      this.productsInCartArray = this.productsInCartArray.filter(prod => prod.id !== productid);
      this.productsArray$.next(this.productsInCartArray);
  
    }

  removeAll() {
    this.productsInCartArray = [];
    this.productsArray$.next(this.productsInCartArray );
  }
  
}
