import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { MsExcelComponent } from './ms-excel/ms-excel.component';

const routes: Routes = [
  { path: '', component: CoursesComponent, 
    children: [
      { path: 'excel', component: MsExcelComponent },
      { path: 'accounting', loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule) },
      { path: 'programming', loadChildren: () => import('./programming/programming.module').then(m => m.ProgrammingModule) },
    // { path: '', redirectTo: "userAccount", pathMatch:'full' },
    ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
