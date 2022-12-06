import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvFinStatementBSComponent } from './bv-fin-statement-bs.component';

describe('BvFinStatementBSComponent', () => {
  let component: BvFinStatementBSComponent;
  let fixture: ComponentFixture<BvFinStatementBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BvFinStatementBSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BvFinStatementBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
