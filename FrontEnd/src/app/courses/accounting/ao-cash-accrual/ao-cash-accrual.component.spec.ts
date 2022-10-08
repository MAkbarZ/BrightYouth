import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoCashAccrualComponent } from './ao-cash-accrual.component';

describe('AoCashAccrualComponent', () => {
  let component: AoCashAccrualComponent;
  let fixture: ComponentFixture<AoCashAccrualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoCashAccrualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoCashAccrualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
