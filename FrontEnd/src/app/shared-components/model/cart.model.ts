import { IProduct } from "../inteface/ProductInterface";

export class Cart {

  id: number;
  category: string;
  productName: string;
  description: string;
  price: number;
  image: string;
  ratingCount: number;
  
  merchantId: number;
  merchantName: string;
  mobile: string;
  address: string;
  city: string;
  province: string;
  

  constructor() 
   {
    this.id = 0;    
    this.category = '';
    this.productName = '';
    this.description = '';
    this.price = 0;
    this.image = '';
    this.ratingCount = 0;

    this.merchantId = 0;
    this.merchantName = '';
    this.mobile = '';
    this.address = '';
    this.city = '';
    this.province = '';
  
  }

  
}
