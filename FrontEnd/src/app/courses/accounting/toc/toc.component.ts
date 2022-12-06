import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/shared-components/service/course.service';


interface courseObj {
  serial: string;
  active: string;
  lessonName: string;
  title: string;
}

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss'],
})
export class TocComponent implements OnInit {
    
  strCurrentLessonSerial: string = '';
  strCurrentLessonTitle: string = '';
  strPrevLessonTitle: string = '';
  strNextLessonTitle: string = '';
  strCurrentLessonName: string = '';
  strPrevLessonName: string = '';
  strNextLessonName: string = '';
  intCurrentLessonSerial: number = 0;
  blnPrevLessonActive: boolean = false;
  blnNextLessonActive: boolean = false;

  courseNameArray: courseObj[] = [];

  cssActiveMenu: string = '';

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseNameArray = new Array();
    this.courseNameArray.push(
      ...this.courseService.arrCourseTocAccounting
    );

    this.courseNameArray[0].active = 'active-menu';
    // this.topicName = 'Table of Contents';
    // this.prevLesson = '';
    // this.nextLesson = 'Bookeeping, Financial Transaction & Event';

    // this.courseService.setTopicName(this.courseName, '0');
    
  }

  // topicChange(event: any, serial: string) {
  topicChange(serial: string) {
    // console.log(event.target.name);
    // console.log(serial);
    // console.log('------------------------');
    // this.courseService.setBasicAccounting(this.strCurrentLessonSerial);
    this.courseService.setBasicAccounting(serial);
//     switch (event.target.name) {
// 
//       case navMenuNames.toc:
//         this.courseService.setTopicName(this.courseName, '0');
//         break;
//       case navMenuNames.BKeepFTransFEvent:
//         this.courseService.setTopicName(this.courseName, '1');
//         break;
//       case navMenuNames.RecordingAndTrack:
//         this.courseService.setTopicName(this.courseName, '2');
//         break;
//       case navMenuNames.GAAP:
//         this.courseService.setTopicName(this.courseName, '3');
//         break;
//       case navMenuNames.AccPrinciples:
//         this.courseService.setTopicName(this.courseName, '4');
//         break;
//       case navMenuNames.Assumptions:
//         this.courseService.setTopicName(this.courseName, '5');
//         break;
//       case navMenuNames.Constraints:
//         this.courseService.setTopicName(this.courseName, '6');
//         break;
//       case navMenuNames.TheWordAcc:
//         this.courseService.setTopicName(this.courseName, '7');
//         break;
//       case navMenuNames.AccTypes:
//         this.courseService.setTopicName(this.courseName, '8');
//         break;
//       case navMenuNames.ChartOfAcc:
//         this.courseService.setTopicName(this.courseName, '9');
//         break;
//       case navMenuNames.WhatIsAccounting:
//         this.courseService.setTopicName(this.courseName, '10');
//         break;
//       case navMenuNames.DefProcMethodSys:
//         this.courseService.setTopicName(this.courseName, '11');
//         break;
//       case navMenuNames.AccSystem:
//         this.courseService.setTopicName(this.courseName, '12');
//         break;
//       case navMenuNames.HistoryAcc:
//         this.courseService.setTopicName(this.courseName, '13');
//         break;
//       case navMenuNames.TyesOfAccounting:
//         this.courseService.setTopicName(this.courseName, '14');
//         break;
//       case navMenuNames.CashAccrual:
//         this.courseService.setTopicName(this.courseName, '15');
//         break;
//       case navMenuNames.ImpactBusinessStra:
//         this.courseService.setTopicName(this.courseName, '16');
//         break;
//         case navMenuNames.AccCycle:
//         this.courseService.setTopicName(this.courseName, '17');
//         break;
// 
//       default:
//         case navMenuNames.toc:
//         this.courseService.setTopicName(this.courseName, '0');
//         break;
//     }
  }
}

// enum navMenuNames {
//   toc = 'toc',
//   BKeepFTransFEvent = 'BKeepFTransFEvent',
//   RecordingAndTrack = 'RecordingAndTrack',
//   GAAP = 'GAAP',
//   AccPrinciples = 'AccPrinciples',
//   Assumptions = 'Assumptions',
//   Constraints = 'Constraints',
//   TheWordAcc = 'TheWordAcc',
//   AccTypes = 'AccTypes',
//   ChartOfAcc = 'ChartOfAcc',
//   WhatIsAccounting = 'WhatIsAccounting',
//   DefProcMethodSys = 'DefProcMethodSys',
//   AccSystem = 'AccSystem',
//   HistoryAcc = 'HistoryAcc',
//   TyesOfAccounting = 'TyesOfAccounting',
//   CashAccrual = 'CashAccrual',
//   ImpactBusinessStra = 'ImpactBusinessStra',
//   AccCycle = 'AccCycle',
// }

// switch (event.target.name) {
//   case navMenuNames.toc:
//     this.tocActive = true;
//     this.topicName = 'Table of Contents';
//     this.prevLesson = '';
//     this.nextLesson = 'Bookeeping, Financial Transaction & Event';
//     this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, false);
//     break;
//     case navMenuNames.BKeepFTransFEvent: this.BKeepFTransFEventActive = true; this.topicName = 'Bookeeping, Financial Transaction & Event'; this.prevLesson = 'Recording And Tracking'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.RecordingAndTrack: this.RecordingAndTrackActive = true; this.topicName = 'Recording And Tracking'; this.prevLesson = 'Bookeeping, Financial Transaction & Event'; this.nextLesson = 'Gaap'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.GAAP: this.GAAPActive = true; this.topicName = 'Gaap'; this.prevLesson = 'Recording And Tracking'; this.nextLesson = 'Accounting Principles'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.AccPrinciples: this.AccPrinciplesActive = true; this.topicName = 'Accounting Principles'; this.prevLesson = 'Gaap'; this.nextLesson = 'Assumptions'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.Assumptions: this.AssumptionsActive = true; this.topicName = 'Assumptions'; this.prevLesson = 'Accounting Principles'; this.nextLesson = 'Constraints'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.Constraints: this.ConstraintsActive = true; this.topicName = 'Constraints'; this.prevLesson = 'Assumptions'; this.nextLesson = 'The Word "Account"'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.TheWordAcc: this.TheWordAccActive = true; this.topicName = 'The Word "Account"'; this.prevLesson = 'Constraints'; this.nextLesson = 'Account Types'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.AccTypes: this.AccTypesActive = true; this.topicName = 'Account Types'; this.prevLesson = 'The Word "Account"'; this.nextLesson = 'Chart Of Accounts'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.ChartOfAcc: this.ChartOfAccActive = true; this.topicName = 'Chart Of Accounts'; this.prevLesson = 'Account Types'; this.nextLesson = 'What Is Accounting'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.WhatIsAccounting: this.WhatIsAccountingActive = true; this.topicName = 'What Is Accounting'; this.prevLesson = 'Chart Of Accounts'; this.nextLesson = 'Definitions Of Process, Method And System'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.DefProcMethodSys: this.DefProcMethodSysActive = true; this.topicName = 'Definitions Of Process, Method And System'; this.prevLesson = 'What Is Accounting'; this.nextLesson = 'Accounting System'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.AccSystem: this.AccSystemActive = true; this.topicName = 'Accounting System'; this.prevLesson = 'Definitions Of Process, Method And System'; this.nextLesson = 'History Of Accounting'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.HistoryAcc: this.HistoryAccActive = true; this.topicName = 'History Of Accounting'; this.prevLesson = 'Accounting System'; this.nextLesson = 'Types Of Accounting'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.TyesOfAccounting: this.TyesOfAccountingActive = true; this.topicName = 'Types Of Accounting'; this.prevLesson = 'History Of Accounting'; this.nextLesson = 'Cash Vs. Accrual Basis Of Accounting'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.CashAccrual: this.CashAccrualActive = true; this.topicName = 'Cash Vs. Accrual Basis Of Accounting'; this.prevLesson = 'Types Of Accounting'; this.nextLesson = 'Impact Realizing And Business Strategy'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.ImpactBusinessStra: this.ImpactBusinessStraActive = true; this.topicName = 'Impact Realizing And Business Strategy'; this.prevLesson = 'Cash Vs. Accrual Basis Of Accounting'; this.nextLesson = 'Accounting Cycle'; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, true); break;
//     case navMenuNames.AccCycle: this.AccCycleActive = true; this.topicName = 'Accounting Cycle'; this.prevLesson = 'Impact Realizing And Business Strategy'; this.nextLesson = ''; this.courseService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, false, true); break;
//
//
//
//   //
//   // case navMenuNames.coursesHome:
//   // case navMenuNames.kyCustomer:
//   // case navMenuNames.msExcel:
//   // case navMenuNames.msWord:
//   // case navMenuNames.msPowerPoint:
//   //   this.coursesActive = true;
//   //   break;
//
//   default:
//     this.tocActive = true;
//     this.topicName = 'Table of Contents';
//     this.prevLesson = '';
//     this.nextLesson = 'Bookeeping, Financial Transaction & Event';
//     this.courseAccountingService.setTopicName(this.topicName, this.prevLesson, this.nextLesson, true, false );
//     break;
// }
