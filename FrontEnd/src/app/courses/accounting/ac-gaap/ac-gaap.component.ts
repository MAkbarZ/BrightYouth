import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ac-gaap',
  templateUrl: './ac-gaap.component.html',
  styleUrls: ['./ac-gaap.component.scss']
})
export class AcGAAPComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '3');
  }

}
