import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import accountingTOCdata from './../../courses/accounting/accountingTOC.json';

// export class courseObj {
//   serial = '0';
//   active = 'active-menu';
//   courseName = 'toc';
//   title = 'Table of Content';
// };

interface courseObj {
  serial: string;
  active: string;
  lessonName: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public strCourseName$ = new BehaviorSubject<string>('');
  public strCurrentLessonName$ = new BehaviorSubject<string>('');
  public strPrevLessonName$ = new BehaviorSubject<string>('');
  public strNextLessonName$ = new BehaviorSubject<string>('');
  public strCurrentLessonTitle$ = new BehaviorSubject<string>('');
  public strPrevLessonTitle$ = new BehaviorSubject<string>('');
  public strNextLessonTitle$ = new BehaviorSubject<string>('');
  public blnPrevLessonActive$ = new BehaviorSubject<boolean>(false);
  public blnNextLessonActive$ = new BehaviorSubject<boolean>(false);
  public intCurrentLessonSerial$ = new BehaviorSubject<number>(0);

  private strCourseName = '';
  private strCurrentLessonName = '';
  private strCurrentLessonSerial = '';

  public arrCourseTocAccounting: courseObj[] = accountingTOCdata;

  //   public courseNamesArrayAccounting = [
  //     {
  //       serial: '0',
  //       active: 'active-menu',
  //       courseName: 'toc',
  //       title: 'Table of Content',
  //     },
  //     {
  //       serial: '1',
  //       active: '',
  //       courseName: 'BKeepFTransFEvent',
  //       title: 'Bookeeping, Financial Transaction & Event',
  //     },
  //     {
  //       serial: '2',
  //       active: '',
  //       courseName: 'RecordingAndTrack',
  //       title: 'Recording And Tracking',
  //     },
  //     { serial: '3', active: '', courseName: 'GAAP', title: 'Gaap' },
  //     {
  //       serial: '4',
  //       active: '',
  //       courseName: 'AccPrinciples',
  //       title: 'Accounting Principles',
  //     },
  //     {
  //       serial: '5',
  //       active: '',
  //       courseName: 'Assumptions',
  //       title: 'Assumptions',
  //     },
  //     {
  //       serial: '6',
  //       active: '',
  //       courseName: 'Constraints',
  //       title: 'Constraints',
  //     },
  //     {
  //       serial: '7',
  //       active: '',
  //       courseName: 'TheWordAcc',
  //       title: 'The Word "Account"',
  //     },
  //     { serial: '8', active: '', courseName: 'AccTypes', title: 'Account Types' },
  //     {
  //       serial: '9',
  //       active: '',
  //       courseName: 'ChartOfAcc',
  //       title: 'Chart Of Accounts',
  //     },
  //     {
  //       serial: '10',
  //       active: '',
  //       courseName: 'WhatIsAccounting',
  //       title: 'What Is Accounting?',
  //     },
  //     {
  //       serial: '11',
  //       active: '',
  //       courseName: 'DefProcMethodSys',
  //       title: 'Definitions Of Process, Method And System',
  //     },
  //     {
  //       serial: '12',
  //       active: '',
  //       courseName: 'AccSystem',
  //       title: 'Accounting System',
  //     },
  //     {
  //       serial: '13',
  //       active: '',
  //       courseName: 'HistoryAcc',
  //       title: 'History Of Accounting',
  //     },
  //     {
  //       serial: '14',
  //       active: '',
  //       courseName: 'TyesOfAccounting',
  //       title: 'Types Of Accounting',
  //     },
  //     {
  //       serial: '15',
  //       active: '',
  //       courseName: 'CashAccrual',
  //       title: 'Cash Vs. Accrual Basis Of Accounting',
  //     },
  //     {
  //       serial: '16',
  //       active: '',
  //       courseName: 'ImpactBusinessStra',
  //       title: 'Impact Realizing And Business Strategy',
  //     },
  //     {
  //       serial: '17',
  //       active: '',
  //       courseName: 'AccCycle',
  //       title: 'Accounting Cycle',
  //     },
  //     {
  //       serial: '18',
  //       active: '',
  //       courseName: 'AccEquation',
  //       title: 'Accounting Equation',
  //     },
  //     {
  //       serial: '19',
  //       active: '',
  //       courseName: 'SalesNetIncome',
  //       title: 'Sales, Net Sales And Net Income',
  //     },
  //     {
  //       serial: '20',
  //       active: '',
  //       courseName: 'AccEqForIS',
  //       title: 'Accounting Equation For Income Statement',
  //     },
  //     {
  //       serial: '21',
  //       active: '',
  //       courseName: 'AccEqForAccP',
  //       title: 'Accounting Equation for an Accounting Process',
  //     },
  //     {
  //       serial: '22',
  //       active: '',
  //       courseName: 'AccEqForCombAccP',
  //       title: 'Accounting Equation for Combined Accounting Processes',
  //     },
  //     {
  //       serial: '23',
  //       active: '',
  //       courseName: 'AccEqExercise',
  //       title: 'Accounting Equation - Exercise',
  //     },
  //     {
  //       serial: '24',
  //       active: '',
  //       courseName: 'DoubleESys',
  //       title: 'Double Entry System',
  //     },
  //     {
  //       serial: '25',
  //       active: '',
  //       courseName: 'DoubleESysEx',
  //       title: 'Double Entry System - Exercise',
  //     },
  //     {
  //       serial: '26',
  //       active: '',
  //       courseName: 'DoubleESysDC',
  //       title: 'Double Entry System - Debit And Credit',
  //     },
  //     {
  //       serial: '27',
  //       active: '',
  //       courseName: 'DoubleESysDCEx',
  //       title: 'Double Entry System - Debit And Credit - Exercise',
  //     },
  //     {
  //       serial: '28',
  //       active: '',
  //       courseName: 'BooksOfAcc',
  //       title: 'Books Of Accounts',
  //     },
  //     {
  //       serial: '29',
  //       active: '',
  //       courseName: 'BooksOfAccJournal',
  //       title: 'Books Of Accounts - Journal',
  //     },
  //     {
  //       serial: '30',
  //       active: '',
  //       courseName: 'SubJournal',
  //       title: 'Subdivision Of Journal',
  //     },
  //     {
  //       serial: '31',
  //       active: '',
  //       courseName: 'SubJournalCR',
  //       title: 'Subjournal - Cash Receipt',
  //     },
  //     {
  //       serial: '32',
  //       active: '',
  //       courseName: 'SubJournalCP',
  //       title: 'Subjournal - Cash Payment',
  //     },
  //     {
  //       serial: '33',
  //       active: '',
  //       courseName: 'SubJournalPur',
  //       title: 'Subjournal - Purchases',
  //     },
  //     {
  //       serial: '34',
  //       active: '',
  //       courseName: 'SubJournalPurRet',
  //       title: 'Subjournal - Purchases Return',
  //     },
  //     {
  //       serial: '35',
  //       active: '',
  //       courseName: 'SubJournalSales',
  //       title: 'Subjournal - Sales',
  //     },
  //     {
  //       serial: '36',
  //       active: '',
  //       courseName: 'SubJournalSalesRet',
  //       title: 'Subjournal - Sales Return',
  //     },
  //     {
  //       serial: '37',
  //       active: '',
  //       courseName: 'SubJournalGJ',
  //       title: 'Subjournal - General Journal',
  //     },
  //     {
  //       serial: '38',
  //       active: '',
  //       courseName: 'SubJournalPC',
  //       title: 'Subjournal - Petty Cash',
  //     },
  //     {
  //       serial: '39',
  //       active: '',
  //       courseName: 'SubJournalPCRep',
  //       title: 'Subjournal - Petty Cash Replanishment',
  //     },
  //     {
  //       serial: '40',
  //       active: '',
  //       courseName: 'CreditNotes',
  //       title: 'Credit Notes',
  //     },
  //     {
  //       serial: '41',
  //       active: '',
  //       courseName: 'DebitNotes',
  //       title: 'Debit Notes',
  //     },
  //     {
  //       serial: '42',
  //       active: '',
  //       courseName: 'BooksOfAccLedger',
  //       title: 'Books Of Accounts - Ledger',
  //     },
  //     {
  //       serial: '43',
  //       active: '',
  //       courseName: 'BooksOfAccLedEx',
  //       title: 'Books Of Accounts - Ledger - Exercise',
  //     },
  //     {
  //       serial: '44',
  //       active: '',
  //       courseName: 'TrialBalance',
  //       title: 'Trial Balance',
  //     },
  //     {
  //       serial: '45',
  //       active: '',
  //       courseName: 'TrialBalanceEx',
  //       title: 'Trial Balance - Exercise',
  //     },
  //     {
  //       serial: '46',
  //       active: '',
  //       courseName: 'FinStatement',
  //       title: 'Financial Statement',
  //     },
  //     {
  //       serial: '47',
  //       active: '',
  //       courseName: 'FinStatementPL',
  //       title: 'Financial Statement - Profit And Loss',
  //     },
  //     {
  //       serial: '48',
  //       active: '',
  //       courseName: 'FinStatementBS',
  //       title: 'Financial Statement - Balance Sheet',
  //     },
  //     {
  //       serial: '49',
  //       active: '',
  //       courseName: 'FinStatementCF',
  //       title: 'Financial Statement - Cash Flow',
  //     },
  //     {
  //       serial: '50',
  //       active: '',
  //       courseName: 'FinStatementOE',
  //       title: "Financial Statement - Owner'S Equity",
  //     },
  //     {
  //       serial: '51',
  //       active: '',
  //       courseName: 'ClosingEntries',
  //       title: 'Closing Entries',
  //     },
  //     {
  //       serial: '52',
  //       active: '',
  //       courseName: 'ClosingEntriesEL',
  //       title: 'Closing Entries - Effected Ledgers',
  //     },
  //   ];

  constructor() {
    this.strCourseName = localStorage.getItem('currentCourse')!;
    this.strCurrentLessonName = localStorage.getItem('currentLessonName')!;
    this.strCurrentLessonSerial = localStorage.getItem('currentLessonSerial')!;

    // console.log(accountingTOCdata);
  }

  setBasicAccounting(CurrentLessonSerial: string) {
    // this.strCourseName == 'basicAccounting';
    // localStorage.setItem('currentCourse', this.strCourseName);

    
    var currentLessonSerial: number = 0;

    if (CurrentLessonSerial == '' || CurrentLessonSerial == '0' ) {
      localStorage.setItem('currentLessonSerial', '0');
      currentLessonSerial = 0;
    } else {
      localStorage.setItem('currentLessonSerial', CurrentLessonSerial);
      currentLessonSerial = parseInt(CurrentLessonSerial);
    }

    switch (true) {
      case currentLessonSerial == 0:
        this.blnPrevLessonActive$.next(false);
        this.blnNextLessonActive$.next(true);

        this.getCurrentTopic(0);
        this.getNextTopic(0);
        break;

      case currentLessonSerial >= 0 &&
        currentLessonSerial < this.arrCourseTocAccounting.length - 1:
        this.blnPrevLessonActive$.next(true);
        this.blnNextLessonActive$.next(true);

        this.getCurrentTopic(currentLessonSerial);
        this.getPreviousTopic(currentLessonSerial);
        this.getNextTopic(currentLessonSerial);
        break;
      case currentLessonSerial == this.arrCourseTocAccounting.length - 1:
        this.blnPrevLessonActive$.next(true);
        this.blnNextLessonActive$.next(false);

        this.getCurrentTopic(currentLessonSerial);
        this.getPreviousTopic(currentLessonSerial);
        // this.getNextTopic(currentLessonSerial);
        break;

      default:
        console.log('COURSE.SERVICE.TS : invalid serial number');
    }
  }

  getCurrentTopic(serial: number) {
    this.intCurrentLessonSerial$.next(serial);

    this.strCurrentLessonName$.next(this.arrCourseTocAccounting[serial].lessonName);
    this.strCurrentLessonTitle$.next(this.arrCourseTocAccounting[serial].title);
  }

  getPreviousTopic(serial: number) {
    this.strPrevLessonName$.next(
      this.arrCourseTocAccounting[serial - 1].lessonName
    );
    this.strPrevLessonTitle$.next(
      this.arrCourseTocAccounting[serial - 1].title
    );
  }

  getNextTopic(serial: number) {
    this.strNextLessonName$.next(
      this.arrCourseTocAccounting[serial + 1].lessonName
    );
    this.strNextLessonTitle$.next(
      this.arrCourseTocAccounting[serial + 1].title
    );
  }
}
