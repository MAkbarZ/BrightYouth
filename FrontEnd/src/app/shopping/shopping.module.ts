import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { FormsModule } from '@angular/forms';
import { FilterProductPipe } from '../shared-components/pipes/filter-product.pipe';
import { CartComponent } from './cart/cart.component';
import { DescriptionColComponent } from './cart/description-col/description-col.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    FilterProductPipe,
    CartComponent,
    DescriptionColComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ShoppingRoutingModule,    
  ]
})
export class ShoppingModule { }
