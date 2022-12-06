import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-am-history-acc',
  templateUrl: './am-history-acc.component.html',
  styleUrls: ['./am-history-acc.component.scss']
})
export class AmHistoryAccComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '13');
  }

}
