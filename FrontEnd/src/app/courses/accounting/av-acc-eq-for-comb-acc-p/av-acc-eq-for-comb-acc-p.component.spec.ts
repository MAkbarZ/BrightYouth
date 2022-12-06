import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvAccEqForCombAccPComponent } from './av-acc-eq-for-comb-acc-p.component';

describe('AvAccEqForCombAccPComponent', () => {
  let component: AvAccEqForCombAccPComponent;
  let fixture: ComponentFixture<AvAccEqForCombAccPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvAccEqForCombAccPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvAccEqForCombAccPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
