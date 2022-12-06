import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ak-def-proc-method-sys',
  templateUrl: './ak-def-proc-method-sys.component.html',
  styleUrls: ['./ak-def-proc-method-sys.component.scss']
})
export class AkDefProcMethodSysComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '11');
  }

}
