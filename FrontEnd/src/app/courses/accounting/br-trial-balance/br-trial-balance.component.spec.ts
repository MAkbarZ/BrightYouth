import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrTrialBalanceComponent } from './br-trial-balance.component';

describe('BrTrialBalanceComponent', () => {
  let component: BrTrialBalanceComponent;
  let fixture: ComponentFixture<BrTrialBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrTrialBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrTrialBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
