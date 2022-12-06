import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ad-acc-principles',
  templateUrl: './ad-acc-principles.component.html',
  styleUrls: ['./ad-acc-principles.component.scss']
})
export class AdAccPrinciplesComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '4');
  }

}
