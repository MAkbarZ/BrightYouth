import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-aa-bkeep-ftrans-fevent',
  templateUrl: './aa-bkeep-ftrans-fevent.component.html',
  styleUrls: ['./aa-bkeep-ftrans-fevent.component.scss']
})
export class AaBKeepFTransFEventComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '1');
  }

}
