import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-aq-acc-cycle',
  templateUrl: './aq-acc-cycle.component.html',
  styleUrls: ['./aq-acc-cycle.component.scss']
})
export class AqAccCycleComponent implements OnInit {


  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '17');
  }

}
