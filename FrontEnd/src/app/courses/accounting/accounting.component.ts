import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss'],
})
export class AccountingComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';
  topicTitle: string = '';
  prevLessonTitle: string = '';
  nextLessonTitle: string = '';
  topicName: string = '';
  prevLessonName: string = '';
  nextLessonName: string = '';

  prevLessonActive: boolean = false;
  nextLessonActive: boolean = false;

  courseNameArray = [
    {
      serial: '0',
      active: 'activeMenu',
      name: 'toc',
      title: 'c',
    },
  ];

  cssActiveMenu: string = '';

  constructor(
    private courseAccountingService: CourseAccountingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseNameArray = new Array();
    this.courseNameArray.push(
      ...this.courseAccountingService.courseNamesArrayAccounting
    );

    this.courseNameArray[0].active = 'activeMenu';
    // this.topicName = 'Table of Contents';
    // this.prevLesson = '';
    // this.nextLesson = 'Bookeeping, Financial Transaction & Event';

    this.courseAccountingService.strTopicTitle$.subscribe(
      (res) => (this.topicTitle = res)
    );
    this.courseAccountingService.strPrevLessonTitle$.subscribe(
      (res) => (this.prevLessonTitle = res)
    );
    this.courseAccountingService.strNextLessonTitle$.subscribe(
      (res) => (this.nextLessonTitle = res)
    );
    this.courseAccountingService.strTopicName$.subscribe(
      (res) => (this.topicName = res)
    );
    this.courseAccountingService.strPrevLessonName$.subscribe(
      (res) => (this.prevLessonName = res)
    );
    this.courseAccountingService.strNextLessonName$.subscribe(
      (res) => (this.nextLessonName = res)
    );
    this.courseAccountingService.blnPrevLessonActive$.subscribe(
      (res) => (this.prevLessonActive = res)
    );
    this.courseAccountingService.blnNextLessonActive$.subscribe(
      (res) => (this.nextLessonActive = res)
    );
  }

  disableMe(event: any, serial: any) {
    // alert((parseInt(serial)+1));

    // alert(serial + ' -- ' + (parseInt(serial)+1) + ' -- ' + this.courseNameArray[(parseInt(serial)+1)].active + ' -- ' + this.courseNameArray[(parseInt(serial)+1)].title);
    // console.log((event.target as HTMLAnchorElement).innerHTML);
    // console.log(event.target.name);
    // this.makeActiveBooleanFalse();
    for (let i = 0; i < this.courseNameArray.length; i++) {
      this.courseNameArray[i].active = '';
    }

    this.courseNameArray[serial].active = 'activeMenu';

    switch (event.target.name) {
      case navMenuNames.toc:
        // this.topicName = 'Table of Contents';
        // this.prevLesson = '';
        // this.nextLesson = 'Bookeeping, Financial Transaction & Event';
        // this.topicName = this.courseNameArray[0].title;
        // this.prevLesson = '';
        // this.nextLesson =  this.courseNameArray[1].title;
        // this.prevLessonPath = ''; this.nextLessonPath =  this.courseNameArray[1].name;

        this.courseAccountingService.setTopicName(this.courseName, '0');
        break;
      case navMenuNames.BKeepFTransFEvent:
        this.courseAccountingService.setTopicName(this.courseName, '1');
        break;
      case navMenuNames.RecordingAndTrack:
        this.courseAccountingService.setTopicName(this.courseName, '2');
        break;
      case navMenuNames.GAAP:
        this.courseAccountingService.setTopicName(this.courseName, '3');
        break;
      case navMenuNames.AccPrinciples:
        this.courseAccountingService.setTopicName(this.courseName, '4');
        break;
      case navMenuNames.Assumptions:
        this.courseAccountingService.setTopicName(this.courseName, '5');
        break;
      case navMenuNames.Constraints:
        this.courseAccountingService.setTopicName(this.courseName, '6');
        break;
      case navMenuNames.TheWordAcc:
        this.courseAccountingService.setTopicName(this.courseName, '7');
        break;
      case navMenuNames.AccTypes:
        this.courseAccountingService.setTopicName(this.courseName, '8');
        break;
      case navMenuNames.ChartOfAcc:
        this.courseAccountingService.setTopicName(this.courseName, '9');
        break;
      case navMenuNames.WhatIsAccounting:
        this.courseAccountingService.setTopicName(this.courseName, '10');
        break;
      case navMenuNames.DefProcMethodSys:
        this.courseAccountingService.setTopicName(this.courseName, '11');
        break;
      case navMenuNames.AccSystem:
        this.courseAccountingService.setTopicName(this.courseName, '12');
        break;
      case navMenuNames.HistoryAcc:
        this.courseAccountingService.setTopicName(this.courseName, '13');
        break;
      case navMenuNames.TyesOfAccounting:
        this.courseAccountingService.setTopicName(this.courseName, '14');
        break;
      case navMenuNames.CashAccrual:
        this.courseAccountingService.setTopicName(this.courseName, '15');
        break;
      case navMenuNames.ImpactBusinessStra:
        this.courseAccountingService.setTopicName(this.courseName, '16');
        break;

      //
      // case navMenuNames.coursesHome:
      // case navMenuNames.kyCustomer:
      // case navMenuNames.msExcel:
      // case navMenuNames.msWord:
      // case navMenuNames.msPowerPoint:
      //   this.coursesActive = true;
      //   break;

      default:
      case navMenuNames.AccCycle:
        this.courseAccountingService.setTopicName(this.courseName, '17');
        break;
    }

  }

  gotoPrev(event: any) {
    this.router.navigate(['courses', 'accounting', this.prevLessonName]);
    // disableMe(event, this.prev
    //TODO: set the selected menu to ACTIVE

  }

  gotoNext(event: any) {
    this.router.navigate(['courses', 'accounting', this.nextLessonName]);
  }
}

enum navMenuNames {
  toc = 'toc',
  BKeepFTransFEvent = 'BKeepFTransFEvent',
  RecordingAndTrack = 'RecordingAndTrack',
  GAAP = 'GAAP',
  AccPrinciples = 'AccPrinciples',
  Assumptions = 'Assumptions',
  Constraints = 'Constraints',
  TheWordAcc = 'TheWordAcc',
  AccTypes = 'AccTypes',
  ChartOfAcc = 'ChartOfAcc',
  WhatIsAccounting = 'WhatIsAccounting',
  DefProcMethodSys = 'DefProcMethodSys',
  AccSystem = 'AccSystem',
  HistoryAcc = 'HistoryAcc',
  TyesOfAccounting = 'TyesOfAccounting',
  CashAccrual = 'CashAccrual',
  ImpactBusinessStra = 'ImpactBusinessStra',
  AccCycle = 'AccCycle',
}

//
//
// case navMenuNames.BKeepFTransFEvent: this.prevLessonPath = ''; this.nextLessonPath =  this.courseNameArray[1].name; this.courseAccountingService.setTopicName(this.courseNameArray[1].title, this.courseNameArray[0].title, this.courseNameArray[2].title, true, true); break;
//         case navMenuNames.RecordingAndTrack: this.courseAccountingService.setTopicName(this.courseNameArray[2].title, this.courseNameArray[1].title, this.courseNameArray[3].title, true, true); break;
//         case navMenuNames.GAAP: this.courseAccountingService.setTopicName(this.courseNameArray[3].title, this.courseNameArray[2].title, this.courseNameArray[4].title, true, true); break;
//         case navMenuNames.AccPrinciples: this.courseAccountingService.setTopicName(this.courseNameArray[4].title, this.courseNameArray[3].title, this.courseNameArray[5].title, true, true); break;
//         case navMenuNames.Assumptions:  this.courseAccountingService.setTopicName(this.courseNameArray[5].title, this.courseNameArray[4].title, this.courseNameArray[6].title, true, true); break;
//         case navMenuNames.Constraints: this.courseAccountingService.setTopicName(this.courseNameArray[6].title, this.courseNameArray[5].title, this.courseNameArray[7].title, true, true); break;
//         case navMenuNames.TheWordAcc:  this.courseAccountingService.setTopicName(this.courseNameArray[7].title, this.courseNameArray[6].title, this.courseNameArray[8].title, true, true); break;
//         case navMenuNames.AccTypes: this.courseAccountingService.setTopicName(this.courseNameArray[8].title, this.courseNameArray[7].title, this.courseNameArray[9].title, true, true); break;
//         case navMenuNames.ChartOfAcc: this.courseAccountingService.setTopicName(this.courseNameArray[9].title, this.courseNameArray[8].title, this.courseNameArray[10].title, true, true); break;
//         case navMenuNames.WhatIsAccounting: this.courseAccountingService.setTopicName(this.courseNameArray[10].title, this.courseNameArray[9].title, this.courseNameArray[11].title, true, true); break;
//         case navMenuNames.DefProcMethodSys: this.courseAccountingService.setTopicName(this.courseNameArray[11].title, this.courseNameArray[10].title, this.courseNameArray[12].title, true, true); break;
//         case navMenuNames.AccSystem: this.courseAccountingService.setTopicName(this.courseNameArray[12].title, this.courseNameArray[11].title, this.courseNameArray[13].title, true, true); break;
//         case navMenuNames.HistoryAcc: this.courseAccountingService.setTopicName(this.courseNameArray[13].title, this.courseNameArray[12].title, this.courseNameArray[14].title, true, true); break;
//         case navMenuNames.TyesOfAccounting: this.courseAccountingService.setTopicName(this.courseNameArray[14].title, this.courseNameArray[13].title, this.courseNameArray[15].title, true, true); break;
//         case navMenuNames.CashAccrual: this.courseAccountingService.setTopicName(this.courseNameArray[15].title, this.courseNameArray[14].title, this.courseNameArray[16].title, true, true); break;
//         case navMenuNames.ImpactBusinessStra: this.courseAccountingService.setTopicName(this.courseNameArray[16].title, this.courseNameArray[15].title, this.courseNameArray[17].title, true, true); break;
//         case navMenuNames.AccCycle: this.courseAccountingService.setTopicName(this.courseNameArray[17].title, this.courseNameArray[16].title, this.courseNameArray[0].title, false, true); break;
//
