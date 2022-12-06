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
import { ArAccEquationComponent } from './ar-acc-equation/ar-acc-equation.component';
import { AsSalesNetIncomeComponent } from './as-sales-net-income/as-sales-net-income.component';
import { AtAccEqForISComponent } from './at-acc-eq-for-is/at-acc-eq-for-is.component';
import { AuAccEqForAccPComponent } from './au-acc-eq-for-acc-p/au-acc-eq-for-acc-p.component';
import { AvAccEqForCombAccPComponent } from './av-acc-eq-for-comb-acc-p/av-acc-eq-for-comb-acc-p.component';
import { AwAccEqExerciseComponent } from './aw-acc-eq-exercise/aw-acc-eq-exercise.component';
import { AxDoubleESysComponent } from './ax-double-esys/ax-double-esys.component';
import { AyDoubleESysExComponent } from './ay-double-esys-ex/ay-double-esys-ex.component';
import { AzDoubleESysDCComponent } from './az-double-esys-dc/az-double-esys-dc.component';
import { BaDoubleESysDCExComponent } from './ba-double-esys-dcex/ba-double-esys-dcex.component';
import { BbBooksOfAccComponent } from './bb-books-of-acc/bb-books-of-acc.component';
import { BcBooksOfAccJournalComponent } from './bc-books-of-acc-journal/bc-books-of-acc-journal.component';
import { BdSubJournalComponent } from './bd-sub-journal/bd-sub-journal.component';
import { BeSubJournalCRComponent } from './be-sub-journal-cr/be-sub-journal-cr.component';
import { BfSubJournalCPComponent } from './bf-sub-journal-cp/bf-sub-journal-cp.component';
import { BgSubJournalPurComponent } from './bg-sub-journal-pur/bg-sub-journal-pur.component';
import { BhSubJournalPurRetComponent } from './bh-sub-journal-pur-ret/bh-sub-journal-pur-ret.component';
import { BiSubJournalSalesComponent } from './bi-sub-journal-sales/bi-sub-journal-sales.component';
import { BjSubJournalSalesRetComponent } from './bj-sub-journal-sales-ret/bj-sub-journal-sales-ret.component';
import { BkSubJournalGJComponent } from './bk-sub-journal-gj/bk-sub-journal-gj.component';
import { BlSubJournalPCComponent } from './bl-sub-journal-pc/bl-sub-journal-pc.component';
import { BmSubJournalPCRepComponent } from './bm-sub-journal-pcrep/bm-sub-journal-pcrep.component';
import { BnCreditNotesComponent } from './bn-credit-notes/bn-credit-notes.component';
import { BoDebitNotesComponent } from './bo-debit-notes/bo-debit-notes.component';
import { BpBooksOfAccLedgerComponent } from './bp-books-of-acc-ledger/bp-books-of-acc-ledger.component';
import { BqBooksOfAccLedExComponent } from './bq-books-of-acc-led-ex/bq-books-of-acc-led-ex.component';
import { BrTrialBalanceComponent } from './br-trial-balance/br-trial-balance.component';
import { BsTrialBalanceExComponent } from './bs-trial-balance-ex/bs-trial-balance-ex.component';
import { BtFinStatementComponent } from './bt-fin-statement/bt-fin-statement.component';
import { BuFinStatementPLComponent } from './bu-fin-statement-pl/bu-fin-statement-pl.component';
import { BvFinStatementBSComponent } from './bv-fin-statement-bs/bv-fin-statement-bs.component';
import { BwFinStatementCFComponent } from './bw-fin-statement-cf/bw-fin-statement-cf.component';
import { BxFinStatementOEComponent } from './bx-fin-statement-oe/bx-fin-statement-oe.component';
import { ByClosingEntriesComponent } from './by-closing-entries/by-closing-entries.component';
import { BzClosingEntriesELComponent } from './bz-closing-entries-el/bz-closing-entries-el.component';
import { BuFinStatementPLExComponent } from './bu-fin-statement-plex/bu-fin-statement-plex.component';
import { BvFinStatementBSExComponent } from './bv-fin-statement-bsex/bv-fin-statement-bsex.component';
import { BwFinStatementCFDComponent } from './bw-fin-statement-cfd/bw-fin-statement-cfd.component';
import { BwFinStatementCFIComponent } from './bw-fin-statement-cfi/bw-fin-statement-cfi.component';
import { BwFinStatementCFDExComponent } from './bw-fin-statement-cfdex/bw-fin-statement-cfdex.component';
import { BwFinStatementCFIExComponent } from './bw-fin-statement-cfiex/bw-fin-statement-cfiex.component';
import { BxFinStatementOEExComponent } from './bx-fin-statement-oeex/bx-fin-statement-oeex.component';
import { ByClosingEntriesExComponent } from './by-closing-entries-ex/by-closing-entries-ex.component';


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
    ArAccEquationComponent,
    AsSalesNetIncomeComponent,
    AtAccEqForISComponent,
    AuAccEqForAccPComponent,
    AvAccEqForCombAccPComponent,
    AwAccEqExerciseComponent,
    AxDoubleESysComponent,
    AyDoubleESysExComponent,
    AzDoubleESysDCComponent,
    BaDoubleESysDCExComponent,
    BbBooksOfAccComponent,
    BcBooksOfAccJournalComponent,
    BdSubJournalComponent,
    BeSubJournalCRComponent,
    BfSubJournalCPComponent,
    BgSubJournalPurComponent,
    BhSubJournalPurRetComponent,
    BiSubJournalSalesComponent,
    BjSubJournalSalesRetComponent,
    BkSubJournalGJComponent,
    BlSubJournalPCComponent,
    BmSubJournalPCRepComponent,
    BnCreditNotesComponent,
    BoDebitNotesComponent,
    BpBooksOfAccLedgerComponent,
    BqBooksOfAccLedExComponent,
    BrTrialBalanceComponent,
    BsTrialBalanceExComponent,
    BtFinStatementComponent,
    BuFinStatementPLComponent,
    BvFinStatementBSComponent,
    BwFinStatementCFComponent,
    BxFinStatementOEComponent,
    ByClosingEntriesComponent,
    BzClosingEntriesELComponent,
    BuFinStatementPLExComponent,
    BvFinStatementBSExComponent,
    BwFinStatementCFDComponent,
    BwFinStatementCFIComponent,
    BwFinStatementCFDExComponent,
    BwFinStatementCFIExComponent,
    BxFinStatementOEExComponent,
    ByClosingEntriesExComponent,
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule
  ]
})
export class AccountingModule { }
