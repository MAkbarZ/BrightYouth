import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwFinStatementCFDExComponent } from './bw-fin-statement-cfdex.component';

describe('BwFinStatementCFDExComponent', () => {
  let component: BwFinStatementCFDExComponent;
  let fixture: ComponentFixture<BwFinStatementCFDExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwFinStatementCFDExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwFinStatementCFDExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
