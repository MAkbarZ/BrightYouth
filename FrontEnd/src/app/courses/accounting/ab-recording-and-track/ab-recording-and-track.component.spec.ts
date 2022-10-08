import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbRecordingAndTrackComponent } from './ab-recording-and-track.component';

describe('AbRecordingAndTrackComponent', () => {
  let component: AbRecordingAndTrackComponent;
  let fixture: ComponentFixture<AbRecordingAndTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbRecordingAndTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbRecordingAndTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
