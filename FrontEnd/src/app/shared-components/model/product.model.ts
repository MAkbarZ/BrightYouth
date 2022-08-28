import { IProduct } from "../inteface/ProductInterface";

export class Product {
  // private id: number;
  // private category: string;
  // private prodName: string;
  // private price: number;
  // private description: string;
  // private image: string;

  id: number;
  categoryId: number;
  categoryName: string;
  productName: string;
  description: string;
  price: number;
  image: string;
  ratingCount: number;
  
  merchantId: number;
  merchantName: string;
  merchantMobile: string;

  // Response: string = "200 OK";
  // passed: boolean = true;


/* sample data

{
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: '../../assets/test/1.jpg',
      rating: { rate: 3.9, count: 120 },
    },

*/

  constructor() 
   {
    this.id = 0;    
    this.categoryId = 0;
    this.categoryName = '';

    this.productName = '';
    this.description = '';
    this.price = 0;
    this.image = '';
    this.ratingCount = 0;

    this.merchantId = 0;
    this.merchantName = '';
    this.merchantMobile = '';
  }

  // get productId(): number { return this.id; }
  // set productId(value: number) { this.id = value; }

  //   get productCategory(): string { return this.category; }
  // set productCategory(value: string) { this.category = value; }

  //   get productName(): string { return this.prodName; }
  // set productName(value: string) { this.prodName = value; }

  //   get productPrice(): number { return this.price; }
  // // set productPrice(value: number) { this.price = value; }
  // set productPrice(value: number) {
  //   if (value > 0) {
  //     this.price = value;
  //   }else{
  //     this.price = 0;
  //   }
  // }

  //   get productDescription(): string { return this.description; }
  // set productDescription(value: string) { this.description = value; }

  // get productImage(): string { return this.image; }
  // set productImage(value: string) { this.image = value; }

  //   getCategory(): number {
  //     // return `${this.firstName} ${this.lastName}`;
  //     return this.id;
  //   }

  // getName(): string {
  //   // return `${this.firstName} ${this.lastName}`;
  //   return this.productName;
  // }

  //   getYearlySalary(): number {
  //     return 12 * this.salary;
  //   }
  // getDiscountedPrice(): number {
  //   return this.price * 0.02;
  // }
}
