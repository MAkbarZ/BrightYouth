import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-an-tyes-of-accounting',
  templateUrl: './an-tyes-of-accounting.component.html',
  styleUrls: ['./an-tyes-of-accounting.component.scss']
})
export class AnTyesOfAccountingComponent implements OnInit {

 
  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '14');
  }
}
