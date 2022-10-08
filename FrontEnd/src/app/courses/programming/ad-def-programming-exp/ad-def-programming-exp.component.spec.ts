import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDefProgrammingExpComponent } from './ad-def-programming-exp.component';

describe('AdDefProgrammingExpComponent', () => {
  let component: AdDefProgrammingExpComponent;
  let fixture: ComponentFixture<AdDefProgrammingExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDefProgrammingExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdDefProgrammingExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
