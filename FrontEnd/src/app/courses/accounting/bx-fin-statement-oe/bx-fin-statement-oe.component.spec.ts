import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFinStatementOEComponent } from './bx-fin-statement-oe.component';

describe('BxFinStatementOEComponent', () => {
  let component: BxFinStatementOEComponent;
  let fixture: ComponentFixture<BxFinStatementOEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BxFinStatementOEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BxFinStatementOEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
