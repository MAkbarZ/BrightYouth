import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ao-cash-accrual',
  templateUrl: './ao-cash-accrual.component.html',
  styleUrls: ['./ao-cash-accrual.component.scss']
})
export class AoCashAccrualComponent implements OnInit {

  
  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '15');
  }

}
