import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-aj-what-is-accounting',
  templateUrl: './aj-what-is-accounting.component.html',
  styleUrls: ['./aj-what-is-accounting.component.scss']
})
export class AjWhatIsAccountingComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '10');
  }

}
