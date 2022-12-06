import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ae-assumptions',
  templateUrl: './ae-assumptions.component.html',
  styleUrls: ['./ae-assumptions.component.scss']
})
export class AeAssumptionsComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '5');
  }

}
