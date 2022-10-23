import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsComponent } from './tools.component';

import { FormsModule } from '@angular/forms';
import { ToolsRoutingModule } from './tools-routing.module';


@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
