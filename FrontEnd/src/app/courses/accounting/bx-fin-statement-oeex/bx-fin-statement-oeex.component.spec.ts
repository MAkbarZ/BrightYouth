import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxFinStatementOEExComponent } from './bx-fin-statement-oeex.component';

describe('BxFinStatementOEExComponent', () => {
  let component: BxFinStatementOEExComponent;
  let fixture: ComponentFixture<BxFinStatementOEExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BxFinStatementOEExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BxFinStatementOEExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
