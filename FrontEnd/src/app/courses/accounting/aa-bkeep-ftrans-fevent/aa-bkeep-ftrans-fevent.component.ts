import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-aa-bkeep-ftrans-fevent',
  templateUrl: './aa-bkeep-ftrans-fevent.component.html',
  styleUrls: ['./aa-bkeep-ftrans-fevent.component.scss']
})
export class AaBKeepFTransFEventComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setBasicAccounting('1');
    // console.log("aa BOOKEEPING = localStorage.getItem('currentLessonSerial') = " + localStorage.getItem('currentLessonSerial'));
  }

}
