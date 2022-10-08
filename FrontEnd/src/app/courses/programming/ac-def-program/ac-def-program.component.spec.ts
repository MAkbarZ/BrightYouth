import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcDefProgramComponent } from './ac-def-program.component';

describe('AcDefProgramComponent', () => {
  let component: AcDefProgramComponent;
  let fixture: ComponentFixture<AcDefProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcDefProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcDefProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
