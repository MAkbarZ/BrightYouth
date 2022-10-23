import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ae-assumptions',
  templateUrl: './ae-assumptions.component.html',
  styleUrls: ['./ae-assumptions.component.scss']
})
export class AeAssumptionsComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '5');
  }

}
