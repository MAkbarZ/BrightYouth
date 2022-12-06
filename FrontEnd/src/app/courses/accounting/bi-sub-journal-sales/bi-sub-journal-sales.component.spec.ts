import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiSubJournalSalesComponent } from './bi-sub-journal-sales.component';

describe('BiSubJournalSalesComponent', () => {
  let component: BiSubJournalSalesComponent;
  let fixture: ComponentFixture<BiSubJournalSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiSubJournalSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiSubJournalSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
