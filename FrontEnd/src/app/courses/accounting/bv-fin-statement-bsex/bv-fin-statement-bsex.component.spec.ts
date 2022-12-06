import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvFinStatementBSExComponent } from './bv-fin-statement-bsex.component';

describe('BvFinStatementBSExComponent', () => {
  let component: BvFinStatementBSExComponent;
  let fixture: ComponentFixture<BvFinStatementBSExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BvFinStatementBSExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BvFinStatementBSExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
