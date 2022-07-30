import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';

import { CourseRoutingModule } from './course-routing.module';
import { FormsModule } from '@angular/forms';
import { MsExcelComponent } from './ms-excel/ms-excel.component';


@NgModule({
  declarations: [
    CoursesComponent,
    MsExcelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule
  ]
})
export class CoursesModule { }
