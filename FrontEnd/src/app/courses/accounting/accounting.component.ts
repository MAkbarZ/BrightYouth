import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';
import { ActivatedRoute, Router } from '@angular/router';

interface courseObj {
  serial: string;
  active: string;
  lessonName: string;
  title: string;
}

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss'],
})
export class AccountingComponent implements OnInit {

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

  constructor(private courseService: CourseService, private router: Router) {
    
    // this.strCourseName = localStorage.getItem('currentCourse')!;
    // console.log("const before localStorage.getItem('currentLessonSerial') = " + localStorage.getItem('currentLessonSerial'));
  }

  ngOnInit(): void {
    this.courseNameArray = [];
    this.courseNameArray.push(...this.courseService.arrCourseTocAccounting);

    this.strCurrentLessonSerial = localStorage.getItem('currentLessonSerial')!;

    if (this.strCurrentLessonSerial=='0' || this.strCurrentLessonSerial=='' || (localStorage.getItem('currentLessonSerial') == null)) {
      this.courseService.setBasicAccounting('0');
        localStorage.setItem('currentLessonSerial','0');
    } else {
      this.courseService.setBasicAccounting(this.strCurrentLessonSerial);
      localStorage.setItem('currentLessonSerial', this.strCurrentLessonSerial);
    }

    this.strCurrentLessonSerial = localStorage.getItem('currentLessonSerial')!;
    // console.log("NgONIniti localStorage.getItem('currentLessonSerial') = " + localStorage.getItem('currentLessonSerial'));

    this.strCurrentLessonSerial = localStorage.getItem('currentLessonSerial')!;
    
    this.courseService.strCurrentLessonTitle$.subscribe((res) => {
      this.strCurrentLessonTitle = res;
    });
    this.courseService.strPrevLessonTitle$.subscribe((res) => {
      this.strPrevLessonTitle = res;
    });
    this.courseService.strNextLessonTitle$.subscribe((res) => {
      this.strNextLessonTitle = res;
    });
    this.courseService.strCurrentLessonName$.subscribe((res) => {
      this.strCurrentLessonName = res;
    });
    this.courseService.strPrevLessonName$.subscribe((res) => {
      this.strPrevLessonName = res;
    });
    this.courseService.strNextLessonName$.subscribe((res) => {
      this.strNextLessonName = res;
    });
    this.courseService.blnPrevLessonActive$.subscribe((res) => {
      this.blnPrevLessonActive = res;
    });
    this.courseService.blnNextLessonActive$.subscribe((res) => {
      this.blnNextLessonActive = res;
    });

    this.courseService.intCurrentLessonSerial$.subscribe((res) => {
      this.intCurrentLessonSerial = res;

      this.courseNameArray[this.intCurrentLessonSerial].active = 'active-menu';
    });
  }

  disableMe(event: any, serial: string) {
    for (let i = 0; i < this.courseNameArray.length; i++) {
      this.courseNameArray[i].active = '';
    }

    this.courseNameArray[parseInt(serial)].active = 'active-menu';
    this.courseService.setBasicAccounting(serial);
  }

  gotoPrev(event: any) {
    // console.log('this.courseSerial ' + this.courseSerial);
    // console.log('this.courseNameArray[this.courseSerial].title ' + this.courseNameArray[this.courseSerial].title);
    this.intCurrentLessonSerial -= 1;
    // this.router.navigate(['courses', 'accounting', this.prevLessonName]);
    for (let i = 0; i < this.courseNameArray.length; i++) {
      this.courseNameArray[i].active = '';
    }

    this.courseNameArray[this.intCurrentLessonSerial].active = 'active-menu';
    this.courseService.setBasicAccounting(this.intCurrentLessonSerial.toString());
    this.router.navigate([
      'courses',
      'accounting',
      this.courseNameArray[this.intCurrentLessonSerial].lessonName,
    ]);
    // console.log('this.courseSerial ' + this.courseSerial);
    // console.log('this.courseNameArray[this.courseSerial].title ' + this.courseNameArray[this.courseSerial].title);
  }

  gotoNext(event: any) {
    // console.log('this.courseSerial ' + this.courseSerial);
    // console.log('this.courseNameArray[this.courseSerial].title ' + this.courseNameArray[this.courseSerial].title);
    this.intCurrentLessonSerial += 1;

    for (let i = 0; i < this.courseNameArray.length; i++) {
      this.courseNameArray[i].active = '';
    }

    this.courseNameArray[this.intCurrentLessonSerial].active = 'active-menu';
    this.courseService.setBasicAccounting(this.intCurrentLessonSerial.toString());
    this.router.navigate([
      'courses',
      'accounting',
      this.courseNameArray[this.intCurrentLessonSerial].lessonName,
    ]);
    // console.log('this.intCurrentLessonSerial ' + this.courseSerial);
    // console.log('this.courseNameArray[this.courseSerial].title ' + this.courseNameArray[this.courseSerial].title);
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
