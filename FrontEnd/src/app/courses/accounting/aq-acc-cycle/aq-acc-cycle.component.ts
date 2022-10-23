import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-aq-acc-cycle',
  templateUrl: './aq-acc-cycle.component.html',
  styleUrls: ['./aq-acc-cycle.component.scss']
})
export class AqAccCycleComponent implements OnInit {


  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '17');
  }

}
