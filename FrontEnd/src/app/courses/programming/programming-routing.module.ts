import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaOverviewComponent } from './aa-overview/aa-overview.component';
import { AbDefProgrammingComponent } from './ab-def-programming/ab-def-programming.component';
import { AcDefProgramComponent } from './ac-def-program/ac-def-program.component';
import { AdDefProgrammingExpComponent } from './ad-def-programming-exp/ad-def-programming-exp.component';
import { AeProgSimpleTaskComponent } from './ae-prog-simple-task/ae-prog-simple-task.component';
import { AfProgImproveProgComponent } from './af-prog-improve-prog/af-prog-improve-prog.component';
import { AgProgCompProgComponent } from './ag-prog-comp-prog/ag-prog-comp-prog.component';
import { ProgrammingComponent } from './programming.component';

const routes: Routes = [{ path: '', component: ProgrammingComponent,
children: [
  { path: 'Overview', component: AaOverviewComponent},
  { path: 'DefinitionOfProgramming', component: AbDefProgrammingComponent},
  { path: 'DefinitionOfProgram', component: AcDefProgramComponent},
  { path: 'DefinitionOfProgrammingExp', component: AdDefProgrammingExpComponent},
  { path: 'ProgramAsSimpleTask', component: AeProgSimpleTaskComponent},
  { path: 'ProgramAsImproveProg', component: AfProgImproveProgComponent},
  { path: 'ProgramAsCompProg', component: AgProgCompProgComponent},
// { path: '', redirectTo: "userAccount", pathMatch:'full' },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammingRoutingModule { }
