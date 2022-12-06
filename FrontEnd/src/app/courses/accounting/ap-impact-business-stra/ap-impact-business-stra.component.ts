import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ap-impact-business-stra',
  templateUrl: './ap-impact-business-stra.component.html',
  styleUrls: ['./ap-impact-business-stra.component.scss']
})
export class ApImpactBusinessStraComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '16');
  }

}
