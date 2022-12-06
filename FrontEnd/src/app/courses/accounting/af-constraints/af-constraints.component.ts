import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-af-constraints',
  templateUrl: './af-constraints.component.html',
  styleUrls: ['./af-constraints.component.scss']
})
export class AfConstraintsComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '6');
  }

}
