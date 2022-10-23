import { Component, OnInit } from '@angular/core';
import { CourseAccountingService } from 'src/app/shared-components/service/course-accounting.service';

@Component({
  selector: 'app-ab-recording-and-track',
  templateUrl: './ab-recording-and-track.component.html',
  styleUrls: ['./ab-recording-and-track.component.scss']
})
export class AbRecordingAndTrackComponent implements OnInit {

  courseName: string = 'courseNamesArrayAccounting';

  constructor(private courseAccountingService: CourseAccountingService) { }

  ngOnInit(): void {
    this.courseAccountingService.setTopicName(this.courseName, '2');
  }

}
