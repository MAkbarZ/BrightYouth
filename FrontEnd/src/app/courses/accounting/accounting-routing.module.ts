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
import { BuFinStatementPLExComponent } from './bu-fin-statement-plex/bu-fin-statement-plex.component';
import { BvFinStatementBSComponent } from './bv-fin-statement-bs/bv-fin-statement-bs.component';
import { BvFinStatementBSExComponent } from './bv-fin-statement-bsex/bv-fin-statement-bsex.component';
import { BwFinStatementCFComponent } from './bw-fin-statement-cf/bw-fin-statement-cf.component';
import { BwFinStatementCFDComponent } from './bw-fin-statement-cfd/bw-fin-statement-cfd.component';
import { BwFinStatementCFDExComponent } from './bw-fin-statement-cfdex/bw-fin-statement-cfdex.component';
import { BwFinStatementCFIComponent } from './bw-fin-statement-cfi/bw-fin-statement-cfi.component';
import { BwFinStatementCFIExComponent } from './bw-fin-statement-cfiex/bw-fin-statement-cfiex.component';
import { BxFinStatementOEComponent } from './bx-fin-statement-oe/bx-fin-statement-oe.component';
import { BxFinStatementOEExComponent } from './bx-fin-statement-oeex/bx-fin-statement-oeex.component';
import { ByClosingEntriesExComponent } from './by-closing-entries-ex/by-closing-entries-ex.component';
import { ByClosingEntriesComponent } from './by-closing-entries/by-closing-entries.component';
import { BzClosingEntriesELComponent } from './bz-closing-entries-el/bz-closing-entries-el.component';
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
{ path: 'AccCycle', component: AqAccCycleComponent},
{ path: 'AccEquation', component: ArAccEquationComponent},
{ path: 'SalesNetIncome', component: AsSalesNetIncomeComponent},
{ path: 'AccEqForIS', component: AtAccEqForISComponent},
{ path: 'AccEqForAccP', component: AuAccEqForAccPComponent},
{ path: 'AccEqForCombAccP', component: AvAccEqForCombAccPComponent},
{ path: 'AccEqExercise', component: AwAccEqExerciseComponent},
{ path: 'DoubleESys', component: AxDoubleESysComponent},
{ path: 'DoubleESysEx', component: AyDoubleESysExComponent},
{ path: 'DoubleESysDC', component: AzDoubleESysDCComponent},
{ path: 'DoubleESysDCEx', component: BaDoubleESysDCExComponent},
{ path: 'BooksOfAcc', component: BbBooksOfAccComponent},
{ path: 'BooksOfAccJournal', component: BcBooksOfAccJournalComponent},
{ path: 'SubJournal', component: BdSubJournalComponent},
{ path: 'SubJournalCR', component: BeSubJournalCRComponent},
{ path: 'SubJournalCP', component: BfSubJournalCPComponent},
{ path: 'SubJournalPur', component: BgSubJournalPurComponent},
{ path: 'SubJournalPurRet', component: BhSubJournalPurRetComponent},
{ path: 'SubJournalSales', component: BiSubJournalSalesComponent},
{ path: 'SubJournalSalesRet', component: BjSubJournalSalesRetComponent},
{ path: 'SubJournalGJ', component: BkSubJournalGJComponent},
{ path: 'SubJournalPC', component: BlSubJournalPCComponent},
{ path: 'SubJournalPCRep', component: BmSubJournalPCRepComponent},
{ path: 'CreditNotes', component: BnCreditNotesComponent},
{ path: 'DebitNotes', component: BoDebitNotesComponent},
{ path: 'BooksOfAccLedger', component: BpBooksOfAccLedgerComponent},
{ path: 'BooksOfAccLedEx', component: BqBooksOfAccLedExComponent},
{ path: 'TrialBalance', component: BrTrialBalanceComponent},
{ path: 'TrialBalanceEx', component: BsTrialBalanceExComponent},
{ path: 'FinStatement', component: BtFinStatementComponent},
{ path: 'FinStatementPL', component: BuFinStatementPLComponent},
{ path: 'FinStatementBS', component: BvFinStatementBSComponent},
{ path: 'FinStatementCF', component: BwFinStatementCFComponent},
{ path: 'FinStatementOE', component: BxFinStatementOEComponent},
{ path: 'ClosingEntries', component: ByClosingEntriesComponent},
{ path: 'ClosingEntriesEL', component: BzClosingEntriesELComponent},

{ path: 'FinStatementPLEx', component: BuFinStatementPLExComponent},
{ path: 'FinStatementBSEx', component: BvFinStatementBSExComponent},

{ path: 'FinStatementCFD', component: BwFinStatementCFDComponent},
{ path: 'FinStatementCFI', component: BwFinStatementCFIComponent},
{ path: 'FinStatementCFDEx', component: BwFinStatementCFDExComponent},
{ path: 'FinStatementCFIEx', component: BwFinStatementCFIExComponent},
{ path: 'FinStatementOEEx', component: BxFinStatementOEExComponent},
{ path: 'ClosingEntriesEx', component: ByClosingEntriesExComponent}

  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
