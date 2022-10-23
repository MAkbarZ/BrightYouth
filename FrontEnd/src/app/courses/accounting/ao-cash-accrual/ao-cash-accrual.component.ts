import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ao-cash-accrual',
  templateUrl: './ao-cash-accrual.component.html',
  styleUrls: ['./ao-cash-accrual.component.scss']
})
export class AoCashAccrualComponent implements OnInit {

  
  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '15');
  }

}
