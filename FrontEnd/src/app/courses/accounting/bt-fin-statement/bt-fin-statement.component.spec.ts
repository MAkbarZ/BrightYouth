import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtFinStatementComponent } from './bt-fin-statement.component';

describe('BtFinStatementComponent', () => {
  let component: BtFinStatementComponent;
  let fixture: ComponentFixture<BtFinStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtFinStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtFinStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
