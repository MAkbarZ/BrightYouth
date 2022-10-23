import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-af-constraints',
  templateUrl: './af-constraints.component.html',
  styleUrls: ['./af-constraints.component.scss']
})
export class AfConstraintsComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '6');
  }

}
