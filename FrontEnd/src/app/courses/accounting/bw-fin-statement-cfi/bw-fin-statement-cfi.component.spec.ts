import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwFinStatementCFIComponent } from './bw-fin-statement-cfi.component';

describe('BwFinStatementCFIComponent', () => {
  let component: BwFinStatementCFIComponent;
  let fixture: ComponentFixture<BwFinStatementCFIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwFinStatementCFIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwFinStatementCFIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
