import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { UploadImage } from '../model/uploadImage.model';
import { GlobalConstant } from '../types/globaltypes';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  private baseUrl:string = GlobalConstant.apiBaseURL;

  constructor(private http: HttpClient) { 
  }

  getProducts() {
    return this.http.get<Product>(this.baseUrl + 'products.php');
    // console.log(this.baseUrl + 'products');
  }

  uploadProductImage(imageFile: File, productId: string) {
    const formData = new FormData();
    formData.append('image', imageFile, imageFile.name);
    formData.append('id', productId);

    return this.http.post(this.baseUrl + 'product/uploadPhoto.php', formData);
  }
}
