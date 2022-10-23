import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ak-def-proc-method-sys',
  templateUrl: './ak-def-proc-method-sys.component.html',
  styleUrls: ['./ak-def-proc-method-sys.component.scss']
})
export class AkDefProcMethodSysComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '11');
  }

}
