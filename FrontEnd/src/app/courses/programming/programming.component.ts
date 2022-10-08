import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.scss'],
})
export class ProgrammingComponent implements OnInit {
  topicName: string = 'Welcome';
  prevLesson: string = '';
  nextLesson: string = '';

  prevLessonActive: boolean = false;
  nextLessonActive: boolean = false;

  overviewActive: boolean = true;
  DefinitionOfProgrammingActive: boolean = false;
  DefinitionOfProgramActive: boolean = false;
  DefinitionOfProgrammingExpActive: boolean = false;
  ProgramAsSimpleTaskActive: boolean = false;
  ProgramAsImproveProgActive: boolean = false;
  ProgramAsCompProgActive: boolean = false;

  constructor() {}

  ngOnInit(): void {

        this.overviewActive = true;
        this.topicName = 'Overview';
        this.prevLesson = '';
        this.nextLesson = 'Definition of Programming';
        this.prevLessonActive = false;
        this.nextLessonActive = true;
  }

  disableMe(event: any) {
    // console.log((event.target as HTMLAnchorElement).innerHTML);
    // console.log(event.target.name);
    this.makeActiveBooleanFalse();

    switch (event.target.name) {
      case navMenuNames.overview:
        this.overviewActive = true;
        this.topicName = 'Overview';
        this.prevLesson = '';
        this.nextLesson = 'Definition of Programming';
        this.prevLessonActive = false;
        this.nextLessonActive = true;
        break;
      case navMenuNames.DefinitionOfProgramming:
        this.DefinitionOfProgrammingActive = true;
        this.topicName = 'Definition of Programming';
        this.prevLesson = 'Overview';
        this.nextLesson = 'Definition of Program';
        this.prevLessonActive = true;
        this.nextLessonActive = true;
        break;
      case navMenuNames.DefinitionOfProgram:
        this.DefinitionOfProgramActive = true;
        this.topicName = 'Definition of Program';
        this.prevLesson = 'Definition of Programming';
        this.nextLesson = 'Definition of Programming - Expanded';
        this.prevLessonActive = true;
        this.nextLessonActive = true;
        break;
      case navMenuNames.DefinitionOfProgrammingExp:
        this.DefinitionOfProgrammingExpActive = true;
        this.topicName = 'Definition of Programming - Expanded';
        this.prevLesson = 'Definition of Program';
        this.nextLesson = 'Program as a Simple Task';
        this.prevLessonActive = true;
        this.nextLessonActive = true;
        break;
      case navMenuNames.ProgramAsSimpleTask:
        this.ProgramAsSimpleTaskActive = true;
        this.topicName = 'Program as a Simple Task';
        this.prevLesson = 'Definition of Programming - Expanded';
        this.nextLesson = 'Program as a Large Improvement Program';
        this.prevLessonActive = true;
        this.nextLessonActive = true;
        break;
      case navMenuNames.ProgramAsImproveProg:
        this.ProgramAsImproveProgActive = true;
        this.topicName = 'Program as a Large Improvement Program';
        this.prevLesson = 'Program as a Simple Task';
        this.nextLesson = 'Program as a Computer Program?';
        this.prevLessonActive = true;
        this.nextLessonActive = true;
        break;
      case navMenuNames.ProgramAsCompProg:
        this.ProgramAsCompProgActive = true;
        this.topicName = 'Program as a Computer Program?';
        this.prevLesson = 'Program as a Large Improvement Program';
        this.nextLesson = '';
        this.prevLessonActive = true;
        this.nextLessonActive = false;
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
        this.overviewActive = true;
        this.topicName = 'Overview';
        this.prevLesson = '';
        this.nextLesson = 'Definition of Programming';
        this.prevLessonActive = false;
        this.nextLessonActive = true;
        break;
    }
  }

  makeActiveBooleanFalse() {
    this.overviewActive = false;
    this.DefinitionOfProgrammingActive = false;
    this.DefinitionOfProgramActive = false;
    this.DefinitionOfProgrammingExpActive = false;
    this.ProgramAsSimpleTaskActive = false;
    this.ProgramAsImproveProgActive = false;
    this.ProgramAsCompProgActive = false;
  }
}

enum navMenuNames {
  overview = 'overview',
  DefinitionOfProgramming = 'DefinitionOfProgramming',
  DefinitionOfProgram = 'DefinitionOfProgram',
  DefinitionOfProgrammingExp = 'DefinitionOfProgrammingExp',
  ProgramAsSimpleTask = 'ProgramAsSimpleTask',
  ProgramAsImproveProg = 'ProgramAsImproveProg',
  ProgramAsCompProg = 'ProgramAsCompProg',
  
}
