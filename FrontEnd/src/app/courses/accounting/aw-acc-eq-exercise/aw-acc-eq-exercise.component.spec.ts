import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwAccEqExerciseComponent } from './aw-acc-eq-exercise.component';

describe('AwAccEqExerciseComponent', () => {
  let component: AwAccEqExerciseComponent;
  let fixture: ComponentFixture<AwAccEqExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwAccEqExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwAccEqExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
