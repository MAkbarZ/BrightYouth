import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-an-tyes-of-accounting',
  templateUrl: './an-tyes-of-accounting.component.html',
  styleUrls: ['./an-tyes-of-accounting.component.scss']
})
export class AnTyesOfAccountingComponent implements OnInit {

 
  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '14');
  }
}
