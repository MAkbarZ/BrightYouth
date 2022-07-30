import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { GlobalConstant } from '../types/globaltypes';


@Injectable({
  providedIn: 'root',
})
export class ApiShoppingService {


  private baseUrl:string = GlobalConstant.apiBaseURL;
  // public products: any;
  
  constructor(private http: HttpClient) {}

  getProducts() {
    
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      // 'authentication-token':'12134'
    });

    // console.log("loading data from: this.http.get<Product>('https://fakestoreapi.com/products', {headers: headers})");
    // return this.http.get<Product>('https://fakestoreapi.com/products', {headers: headers});
    return this.http.get<Product>(this.baseUrl + 'product/products.php', {headers: headers});

    //   const param = new HttpParams().set('pageNum','10').set('pageSize', '100');
    //   // return this.http.get('https://www.brightyouth.com/api/User/id=????');
    // return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users',
    //               {headers: customHeader, params: param});
    // return this.http.get<ProductClass[]>('https://fakestoreapi.com/products');
          // .pipe(map((products: ProductClass[]) => products.map(product => new ProductClass(product))));


    //  /* const users=[
    //     {userId:224, username:'akbar'},
    //     {userId:225, username:'ali'},
    //     {userId:226, username:'abi'}
    //   ];
    //   */

    

    // return products;
  }

 
}


