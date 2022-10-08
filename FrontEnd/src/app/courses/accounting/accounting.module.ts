import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accounting.component';
import { AaBKeepFTransFEventComponent } from './aa-bkeep-ftrans-fevent/aa-bkeep-ftrans-fevent.component';
import { AbRecordingAndTrackComponent } from './ab-recording-and-track/ab-recording-and-track.component';
import { AcGAAPComponent } from './ac-gaap/ac-gaap.component';
import { AdAccPrinciplesComponent } from './ad-acc-principles/ad-acc-principles.component';
import { AeAssumptionsComponent } from './ae-assumptions/ae-assumptions.component';
import { AfConstraintsComponent } from './af-constraints/af-constraints.component';
import { AgTheWordAccComponent } from './ag-the-word-acc/ag-the-word-acc.component';
import { AiChartOfAccComponent } from './ai-chart-of-acc/ai-chart-of-acc.component';
import { AjWhatIsAccountingComponent } from './aj-what-is-accounting/aj-what-is-accounting.component';
import { AkDefProcMethodSysComponent } from './ak-def-proc-method-sys/ak-def-proc-method-sys.component';
import { AlAccSystemComponent } from './al-acc-system/al-acc-system.component';
import { AmHistoryAccComponent } from './am-history-acc/am-history-acc.component';
import { AnTyesOfAccountingComponent } from './an-tyes-of-accounting/an-tyes-of-accounting.component';
import { AoCashAccrualComponent } from './ao-cash-accrual/ao-cash-accrual.component';
import { ApImpactBusinessStraComponent } from './ap-impact-business-stra/ap-impact-business-stra.component';
import { AqAccCycleComponent } from './aq-acc-cycle/aq-acc-cycle.component';
import { AhAccTypesComponent } from './ah-acc-types/ah-acc-types.component';
import { TocComponent } from './toc/toc.component';


@NgModule({
  declarations: [
    AccountingComponent,
    AaBKeepFTransFEventComponent,
    AbRecordingAndTrackComponent,
    AcGAAPComponent,
    AdAccPrinciplesComponent,
    AeAssumptionsComponent,
    AfConstraintsComponent,
    AgTheWordAccComponent,
    AiChartOfAccComponent,
    AjWhatIsAccountingComponent,
    AkDefProcMethodSysComponent,
    AlAccSystemComponent,
    AmHistoryAccComponent,
    AnTyesOfAccountingComponent,
    AoCashAccrualComponent,
    ApImpactBusinessStraComponent,
    AqAccCycleComponent,
    AhAccTypesComponent,
    TocComponent,
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule
  ]
})
export class AccountingModule { }
