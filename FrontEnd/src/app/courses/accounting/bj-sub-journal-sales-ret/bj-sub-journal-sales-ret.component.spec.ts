import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BjSubJournalSalesRetComponent } from './bj-sub-journal-sales-ret.component';

describe('BjSubJournalSalesRetComponent', () => {
  let component: BjSubJournalSalesRetComponent;
  let fixture: ComponentFixture<BjSubJournalSalesRetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BjSubJournalSalesRetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BjSubJournalSalesRetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
