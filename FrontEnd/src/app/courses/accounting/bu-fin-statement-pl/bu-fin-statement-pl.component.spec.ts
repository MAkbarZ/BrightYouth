import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuFinStatementPLComponent } from './bu-fin-statement-pl.component';

describe('BuFinStatementPLComponent', () => {
  let component: BuFinStatementPLComponent;
  let fixture: ComponentFixture<BuFinStatementPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuFinStatementPLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuFinStatementPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
