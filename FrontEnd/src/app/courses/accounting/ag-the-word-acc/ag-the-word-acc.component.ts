import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ag-the-word-acc',
  templateUrl: './ag-the-word-acc.component.html',
  styleUrls: ['./ag-the-word-acc.component.scss']
})
export class AgTheWordAccComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '7');
  }

}
