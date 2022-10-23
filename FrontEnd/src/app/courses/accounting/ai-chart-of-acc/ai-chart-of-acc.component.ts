import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ai-chart-of-acc',
  templateUrl: './ai-chart-of-acc.component.html',
  styleUrls: ['./ai-chart-of-acc.component.scss']
})
export class AiChartOfAccComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '9');
  }
}
