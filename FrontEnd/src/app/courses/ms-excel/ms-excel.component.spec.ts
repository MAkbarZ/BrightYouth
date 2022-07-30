import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsExcelComponent } from './ms-excel.component';

describe('MsExcelComponent', () => {
  let component: MsExcelComponent;
  let fixture: ComponentFixture<MsExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsExcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
