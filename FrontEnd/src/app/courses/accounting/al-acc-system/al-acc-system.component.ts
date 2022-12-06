import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-al-acc-system',
  templateUrl: './al-acc-system.component.html',
  styleUrls: ['./al-acc-system.component.scss']
})
export class AlAccSystemComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '12');
  }

}
