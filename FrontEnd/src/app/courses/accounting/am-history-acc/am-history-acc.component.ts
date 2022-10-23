import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-am-history-acc',
  templateUrl: './am-history-acc.component.html',
  styleUrls: ['./am-history-acc.component.scss']
})
export class AmHistoryAccComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '13');
  }

}
