import { Component, OnInit, Pipe } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductComponent } from '../business/product/product.component';
import { Product } from '../shared-components/model/product.model';
import { ApiShoppingService } from '../shared-components/service/api-shopping.service';
import { ShoppingService } from '../shared-components/service/shopping.service';
import { GlobalConstant } from '../shared-components/types/globaltypes';
// import { productMoke } from "./productsMoke";


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  // public products: Product[];
  public products: any;
  baseUrlImage:string = GlobalConstant.apiBaseURLImage;

  recordCount:number = 0

  public strSearch$ = new BehaviorSubject<string>('');
  strSearchKey='';
  strTotalItem!: string;
  
  public productImage:any;

  //pagination variables
  public current = 1;
  // public items = [...Array(180).keys()].map((x) => `item ${++x}`);
  // public itemsToDisplay: string[] = [];
  public perPage = 25;
  // public total = Math.ceil(this.items.length / this.perPage);
  public total = 0;



  constructor(private shoppingService: ShoppingService, private api: ApiShoppingService) {
    this.products = [];
  }

  ngOnInit(): void {

    // this.apiGetAllProducts();
    this.paginate(this.current, this.perPage);
    
    

    this.strSearch$.subscribe({
      next: (res:string ) => {
        this.strSearchKey = res;
      },
      error: (err:any) => { 
        console.log(`Unable to search data from URL ${err}`);
      },
      complete: () => {
        console.log('Search Data loaded successfully.');
        
      }
    });
    
      this.srvGetAllProducts();
    
      //pagination
      // this.itemsToDisplay = this.paginate(this.current, this.perPage);
     

  } // ========== end of ngOnInit()


  openModal() {

    // const myModal? = <HTMLElement>document.getElementById('myModal');
    // const myInput? = document.getElementById('myInput');
       
    // myModal.addEventListener('shown.bs.modal', () => {
    //    myInput.focus();
    // });
  }

  /* ------ funtion to get total items  ------ */
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

  /* ------ funtion to get total items  ------ */
  apiGetAllProducts(page:number, recPerPage:number) {
   
    this.api.getProducts(page, recPerPage).subscribe({
      next: (res) => {
        
        // console.log('res --------------------------');
        // console.log(res);
        // console.log(typeof(res.result));
        // console.log(res.result);
        // console.log(res.Response);
        // console.log(res.passed);
        // console.log(res.count);
        this.total = Math.ceil(res.count / this.perPage);
        // this.total=res.count;
        this.products=res.result;
        
      },
      error: (err:any) => {
        console.log(`Unable to load Products from server`);
        console.log(err);
      },
      complete: () => {
        console.log('Products loaded successfully.');
        this.products.forEach((a:any) => {
          Object.assign(a, { quantity: 1, total: <number>(a.price) });
        });
      }

    });
  } // ========== end of apiGetAllProducts()
   

  searchProduct(event:any) {
    this.strSearch$.next((event.target as HTMLInputElement).value);
  }

  addToCart(item: any) {
    this.shoppingService.addToCart(item);
  }


// ---------------------------- PAGINATION


public onGoTo(page: number): void {
  this.current = page;
  // this.itemsToDisplay = this.paginate(this.current, this.perPage);
  this.paginate(this.current, this.perPage);
}

public onNext(page: number): void {
  this.current = page + 1;
  // this.itemsToDisplay = this.paginate(this.current, this.perPage);
  this.paginate(this.current, this.perPage);
}

public onPrevious(page: number): void {
  this.current = page - 1;
  // this.itemsToDisplay = this.paginate(this.current, this.perPage);
  this.paginate(this.current, this.perPage);
}

// public paginate(current: number, perPage: number): string[] {
public paginate(page:number, recPerPage:number) {
  // return [...this.items.slice((current - 1) * perPage).slice(0, perPage)];
  this.apiGetAllProducts(page, recPerPage);
  // console.log(this.recordCount);
}


 

}

