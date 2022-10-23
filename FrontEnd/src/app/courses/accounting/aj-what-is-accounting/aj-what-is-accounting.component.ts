import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-aj-what-is-accounting',
  templateUrl: './aj-what-is-accounting.component.html',
  styleUrls: ['./aj-what-is-accounting.component.scss']
})
export class AjWhatIsAccountingComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '10');
  }

}
