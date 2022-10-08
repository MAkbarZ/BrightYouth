import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbDefProgrammingComponent } from './ab-def-programming.component';

describe('AbDefProgrammingComponent', () => {
  let component: AbDefProgrammingComponent;
  let fixture: ComponentFixture<AbDefProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbDefProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbDefProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
