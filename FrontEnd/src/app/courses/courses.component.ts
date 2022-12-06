import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared-components/service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // courseName: string = '';
  topicTitle: string = 'toc';
  prevLessonTitle: string = '';
  nextLessonTitle: string = '';
  topicName: string = 'toc';
  prevLessonName: string = '';
  nextLessonName: string = '';

  prevLessonActive: boolean = false;
  nextLessonActive: boolean = false;

  
  basicAccountingActive: boolean = true;
  aboutUsActive: boolean = false;
  shoppingActive: boolean = false;
  coursesActive: boolean = false;
  coursesHomeActive: boolean = false;
  infozimeActive: boolean = false;


  constructor(private courseService: CourseService) {
    // console.log("COURES - localStorage.getItem('currentLessonSerial') = " + localStorage.getItem('currentLessonSerial'));
   }

  ngOnInit(): void {
  
  }

  disableMe(event: any) {
    // console.log((event.target as HTMLAnchorElement).innerHTML);
    // console.log(event.target.name);
    this.makeActiveBooleanFalse();

    switch (event.target.name) {
      case navMenuNames.AccountingToc:
        // this.courseService.setBasicAccounting('0');
       
        // this.courseService.setTopicName('Table of Contents', '', 'Bookeeping, Financial Transaction & Event', true, false);
        this.basicAccountingActive = true;
        break;
      case navMenuNames.aboutUs:
        this.aboutUsActive = true;
        break;
      case navMenuNames.shopping:
        this.shoppingActive = true;
        break;
      case navMenuNames.courses:
        this.coursesActive = true;
        break;
      case navMenuNames.coursesHome:
      case navMenuNames.kyCustomer:
      case navMenuNames.msExcel:
      case navMenuNames.msWord:
      case navMenuNames.msPowerPoint:
        this.coursesActive = true;
        break;

        case navMenuNames.infozime:
          this.infozimeActive = true;
          break;


      default:
        this.coursesActive = true;
        break;
    }
  }

  makeActiveBooleanFalse() {
    this.basicAccountingActive = false;
    this.aboutUsActive = false;
    this.shoppingActive = false;
    this.coursesActive = false;
    this.coursesHomeActive = false;
    this.infozimeActive = false;

  }
}

enum navMenuNames {
  AccountingToc = 'AccountingToc',
  aboutUs = 'aboutUs',
  shopping = 'shopping',
  courses = 'courses',
  
  coursesHome = 'coursesHome',
  kyCustomer = 'kyCustomer',
  msExcel = 'msExcel',
  msWord = 'msWord',
  msPowerPoint = 'msPowerPoint',
  
  infozime = 'infozime',

  userProfile = 'userProfile',
  login = 'login',
  register = 'register'
}

