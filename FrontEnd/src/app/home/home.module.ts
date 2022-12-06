import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    // FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
