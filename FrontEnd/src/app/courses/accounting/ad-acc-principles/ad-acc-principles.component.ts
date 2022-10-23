import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ad-acc-principles',
  templateUrl: './ad-acc-principles.component.html',
  styleUrls: ['./ad-acc-principles.component.scss']
})
export class AdAccPrinciplesComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '4');
  }

}
