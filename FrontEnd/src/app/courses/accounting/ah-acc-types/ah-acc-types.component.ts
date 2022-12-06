import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ah-acc-types',
  templateUrl: './ah-acc-types.component.html',
  styleUrls: ['./ah-acc-types.component.scss']
})
export class AhAccTypesComponent implements OnInit {
  
  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService,) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '8');
  }

}
