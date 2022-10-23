import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ap-impact-business-stra',
  templateUrl: './ap-impact-business-stra.component.html',
  styleUrls: ['./ap-impact-business-stra.component.scss']
})
export class ApImpactBusinessStraComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '16');
  }

}
