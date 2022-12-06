import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTrialBalanceExComponent } from './bs-trial-balance-ex.component';

describe('BsTrialBalanceExComponent', () => {
  let component: BsTrialBalanceExComponent;
  let fixture: ComponentFixture<BsTrialBalanceExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsTrialBalanceExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsTrialBalanceExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
