import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkDefProcMethodSysComponent } from './ak-def-proc-method-sys.component';

describe('AkDefProcMethodSysComponent', () => {
  let component: AkDefProcMethodSysComponent;
  let fixture: ComponentFixture<AkDefProcMethodSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkDefProcMethodSysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkDefProcMethodSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
