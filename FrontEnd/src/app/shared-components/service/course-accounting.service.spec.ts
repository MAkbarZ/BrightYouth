import { TestBed } from '@angular/core/testing';

import { CourseAccountingService } from './course-accounting.service';

describe('CourseAccountingService', () => {
  let service: CourseAccountingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseAccountingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
