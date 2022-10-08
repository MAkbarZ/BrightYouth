import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { GlobalConstant } from '../types/globaltypes';

export interface Products {
  Response: string;
passed: boolean;
count: number;
result: {}
}


@Injectable({
  providedIn: 'root',
})
export class ApiShoppingService {


  private baseUrl:string = GlobalConstant.apiBaseURL;
  // public products: any;
  
  constructor(private http: HttpClient) {}

  getProducts(page:number, recPerPage:number) {
    
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Access-Control-Allow-Methods,X-Requested-With,Content-Type,Accept"
      // 'authentication-token':'12134'
    });

    // console.log("loading data from: this.http.get<Product>('https://fakestoreapi.com/products', {headers: headers})");
    // return this.http.get<Product>('https://fakestoreapi.com/products', {headers: headers});
    // console.log(this.baseUrl + 'product/products.php');
    // return this.http.get<Product>(this.baseUrl + 'product/products.php', {headers: headers});
    // return this.http.get<Products>(this.baseUrl + 'product/products.php', {headers: headers});

    //https://brightyouth.org/BackEnd/api/userQueries/productsByCatByMerchant.php?page=1&recPerPage=4

    return this.http.get<Products>(this.baseUrl + 'userQueries/productsByCatByMerchant.php?page=' + page +'&recPerPage='+recPerPage, {headers: headers});

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


