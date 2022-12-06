import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ai-chart-of-acc',
  templateUrl: './ai-chart-of-acc.component.html',
  styleUrls: ['./ai-chart-of-acc.component.scss']
})
export class AiChartOfAccComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '9');
  }
}
