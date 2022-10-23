import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ac-gaap',
  templateUrl: './ac-gaap.component.html',
  styleUrls: ['./ac-gaap.component.scss']
})
export class AcGAAPComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '3');
  }

}
