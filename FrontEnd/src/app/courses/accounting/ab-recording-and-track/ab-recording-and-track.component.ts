import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared-components/service/course.service';

@Component({
  selector: 'app-ab-recording-and-track',
  templateUrl: './ab-recording-and-track.component.html',
  styleUrls: ['./ab-recording-and-track.component.scss']
})
export class AbRecordingAndTrackComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseService.setTopicName(this.courseName, '2');
  }

}
