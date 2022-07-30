import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    ProductRoutingModule

  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
