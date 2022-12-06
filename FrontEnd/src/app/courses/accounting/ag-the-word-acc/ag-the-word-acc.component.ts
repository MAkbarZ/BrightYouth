import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ag-the-word-acc',
  templateUrl: './ag-the-word-acc.component.html',
  styleUrls: ['./ag-the-word-acc.component.scss']
})
export class AgTheWordAccComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '7');
  }

}
