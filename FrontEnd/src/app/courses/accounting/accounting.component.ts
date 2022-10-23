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
  courseSerial: number = 0;
  prevLessonActive: boolean = false;
  nextLessonActive: boolean = false;

  courseNameArray = [
    {
      serial: '0',
      active: 'activeMenu',
      courseName: 'toc',
      title: 'Table of Content',
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

    
    this.courseAccountingService.strTopicTitle$.subscribe(
      (res) => {this.topicTitle = res; }
    );
    this.courseAccountingService.strPrevLessonTitle$.subscribe(
      (res) => { 
        this.prevLessonTitle = res;         
    
      }
    );
    this.courseAccountingService.strNextLessonTitle$.subscribe(
      (res) => {this.nextLessonTitle = res; }
    );
    this.courseAccountingService.strTopicName$.subscribe(
      (res) => {this.topicName = res; }
    );
    this.courseAccountingService.strPrevLessonName$.subscribe(
      (res) => {this.prevLessonName = res; }
    );
    this.courseAccountingService.strNextLessonName$.subscribe(
      (res) => {this.nextLessonName = res; }
    );
    this.courseAccountingService.blnPrevLessonActive$.subscribe(
      (res) => {this.prevLessonActive = res; }
    );
    this.courseAccountingService.blnNextLessonActive$.subscribe(
      (res) => {this.nextLessonActive = res; }
    );

    // this.courseNameArray[this.courseSerial - 1].active = '';

    this.courseAccountingService.intCurrentTopicSerial$.subscribe(
      (res) => {this.courseSerial = res; 
        
        this.courseNameArray[this.courseSerial].active = 'activeMenu';}
    );


  }

  disableMe(event: any, serial: string) {

    for (let i = 0; i < this.courseNameArray.length; i++) {
      this.courseNameArray[i].active = '';
    }

    this.courseNameArray[parseInt(serial)].active = 'activeMenu';
    this.courseAccountingService.setTopicName(this.courseName, serial);
  }

  gotoPrev(event: any) {
    console.log('this.courseSerial ' + this.courseSerial);
    console.log('this.courseNameArray[this.courseSerial].title ' + this.courseNameArray[this.courseSerial].title);
    this.courseSerial -=1
    // this.router.navigate(['courses', 'accounting', this.prevLessonName]);
     for (let i = 0; i < this.courseNameArray.length; i++) {
      this.courseNameArray[i].active = '';
    }

    this.courseNameArray[this.courseSerial].active = 'activeMenu';
    this.courseAccountingService.setTopicName(this.courseName, (this.courseSerial).toString());
    this.router.navigate(['courses', 'accounting', this.courseNameArray[this.courseSerial].courseName]);
    console.log('this.courseSerial ' + this.courseSerial);
    console.log('this.courseNameArray[this.courseSerial].title ' + this.courseNameArray[this.courseSerial].title);


  }

  gotoNext(event: any) {
    console.log('this.courseSerial ' + this.courseSerial);
    console.log('this.courseNameArray[this.courseSerial].title ' + this.courseNameArray[this.courseSerial].title);
    this.courseSerial +=1
    
    for (let i = 0; i < this.courseNameArray.length; i++) {
      this.courseNameArray[i].active = '';
    }

    this.courseNameArray[this.courseSerial].active = 'activeMenu';
    this.courseAccountingService.setTopicName(this.courseName, (this.courseSerial).toString());
    this.router.navigate(['courses', 'accounting', this.courseNameArray[this.courseSerial].courseName]);
    console.log('this.courseSerial ' + this.courseSerial);
    console.log('this.courseNameArray[this.courseSerial].title ' + this.courseNameArray[this.courseSerial].title);
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
