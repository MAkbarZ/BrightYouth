import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsSalesNetIncomeComponent } from './as-sales-net-income.component';

describe('AsSalesNetIncomeComponent', () => {
  let component: AsSalesNetIncomeComponent;
  let fixture: ComponentFixture<AsSalesNetIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsSalesNetIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsSalesNetIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
