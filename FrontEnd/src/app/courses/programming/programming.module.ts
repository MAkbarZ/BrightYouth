import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgrammingRoutingModule } from './programming-routing.module';
import { ProgrammingComponent } from './programming.component';
import { AaOverviewComponent } from './aa-overview/aa-overview.component';
import { AbDefProgrammingComponent } from './ab-def-programming/ab-def-programming.component';
import { AcDefProgramComponent } from './ac-def-program/ac-def-program.component';
import { AdDefProgrammingExpComponent } from './ad-def-programming-exp/ad-def-programming-exp.component';
import { AeProgSimpleTaskComponent } from './ae-prog-simple-task/ae-prog-simple-task.component';
import { AfProgImproveProgComponent } from './af-prog-improve-prog/af-prog-improve-prog.component';
import { AgProgCompProgComponent } from './ag-prog-comp-prog/ag-prog-comp-prog.component';


@NgModule({
  declarations: [
    ProgrammingComponent,
    AaOverviewComponent,
    AbDefProgrammingComponent,
    AcDefProgramComponent,
    AdDefProgrammingExpComponent,
    AeProgSimpleTaskComponent,
    AfProgImproveProgComponent,
    AgProgCompProgComponent
  ],
  imports: [
    CommonModule,
    ProgrammingRoutingModule
  ]
})
export class ProgrammingModule { }
