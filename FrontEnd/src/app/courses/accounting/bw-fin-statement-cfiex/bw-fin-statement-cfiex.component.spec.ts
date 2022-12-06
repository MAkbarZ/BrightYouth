import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwFinStatementCFIExComponent } from './bw-fin-statement-cfiex.component';

describe('BwFinStatementCFIExComponent', () => {
  let component: BwFinStatementCFIExComponent;
  let fixture: ComponentFixture<BwFinStatementCFIExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwFinStatementCFIExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwFinStatementCFIExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
