import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfozimeRoutingModule } from './infozime-routing.module';
import { InfozimeComponent } from './infozime.component';


@NgModule({
  declarations: [
    InfozimeComponent
  ],
  imports: [
    CommonModule,
    InfozimeRoutingModule
  ]
})
export class InfozimeModule { }
