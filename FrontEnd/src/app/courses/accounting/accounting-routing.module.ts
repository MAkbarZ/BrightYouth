import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaBKeepFTransFEventComponent } from './aa-bkeep-ftrans-fevent/aa-bkeep-ftrans-fevent.component';
import { AbRecordingAndTrackComponent } from './ab-recording-and-track/ab-recording-and-track.component';
import { AcGAAPComponent } from './ac-gaap/ac-gaap.component';
import { AccountingComponent } from './accounting.component';
import { AdAccPrinciplesComponent } from './ad-acc-principles/ad-acc-principles.component';
import { AeAssumptionsComponent } from './ae-assumptions/ae-assumptions.component';
import { AfConstraintsComponent } from './af-constraints/af-constraints.component';
import { AgTheWordAccComponent } from './ag-the-word-acc/ag-the-word-acc.component';
import { AhAccTypesComponent } from './ah-acc-types/ah-acc-types.component';
import { AiChartOfAccComponent } from './ai-chart-of-acc/ai-chart-of-acc.component';
import { AjWhatIsAccountingComponent } from './aj-what-is-accounting/aj-what-is-accounting.component';
import { AkDefProcMethodSysComponent } from './ak-def-proc-method-sys/ak-def-proc-method-sys.component';
import { AlAccSystemComponent } from './al-acc-system/al-acc-system.component';
import { AmHistoryAccComponent } from './am-history-acc/am-history-acc.component';
import { AnTyesOfAccountingComponent } from './an-tyes-of-accounting/an-tyes-of-accounting.component';
import { AoCashAccrualComponent } from './ao-cash-accrual/ao-cash-accrual.component';
import { ApImpactBusinessStraComponent } from './ap-impact-business-stra/ap-impact-business-stra.component';
import { AqAccCycleComponent } from './aq-acc-cycle/aq-acc-cycle.component';
import { TocComponent } from './toc/toc.component';

const routes: Routes = [{ path: '', component: AccountingComponent, 
  children: [
    { path: 'toc', component: TocComponent},
    { path: 'BKeepFTransFEvent', component: AaBKeepFTransFEventComponent},
{ path: 'RecordingAndTrack', component: AbRecordingAndTrackComponent},
{ path: 'GAAP', component: AcGAAPComponent},
{ path: 'AccPrinciples', component: AdAccPrinciplesComponent},
{ path: 'Assumptions', component: AeAssumptionsComponent},
{ path: 'Constraints', component: AfConstraintsComponent},
{ path: 'TheWordAcc', component: AgTheWordAccComponent},
{ path: 'AccTypes', component: AhAccTypesComponent},
{ path: 'ChartOfAcc', component: AiChartOfAccComponent},
{ path: 'WhatIsAccounting', component: AjWhatIsAccountingComponent},
{ path: 'DefProcMethodSys', component: AkDefProcMethodSysComponent},
{ path: 'AccSystem', component: AlAccSystemComponent},
{ path: 'HistoryAcc', component: AmHistoryAccComponent},
{ path: 'TyesOfAccounting', component: AnTyesOfAccountingComponent},
{ path: 'CashAccrual', component: AoCashAccrualComponent},
{ path: 'ImpactBusinessStra', component: ApImpactBusinessStraComponent},
{ path: 'AccCycle', component: AqAccCycleComponent}

  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
