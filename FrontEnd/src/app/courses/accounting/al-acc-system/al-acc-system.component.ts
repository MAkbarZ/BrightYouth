import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-al-acc-system',
  templateUrl: './al-acc-system.component.html',
  styleUrls: ['./al-acc-system.component.scss']
})
export class AlAccSystemComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '12');
  }

}
