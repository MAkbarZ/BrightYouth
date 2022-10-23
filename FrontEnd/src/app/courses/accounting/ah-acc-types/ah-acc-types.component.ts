import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ah-acc-types',
  templateUrl: './ah-acc-types.component.html',
  styleUrls: ['./ah-acc-types.component.scss']
})
export class AhAccTypesComponent implements OnInit {
  
  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService,) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '8');
  }

}
