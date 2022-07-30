import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { MsExcelComponent } from './ms-excel/ms-excel.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'excel', component: MsExcelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
