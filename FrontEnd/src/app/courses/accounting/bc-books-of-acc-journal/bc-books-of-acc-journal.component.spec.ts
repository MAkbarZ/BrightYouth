import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcBooksOfAccJournalComponent } from './bc-books-of-acc-journal.component';

describe('BcBooksOfAccJournalComponent', () => {
  let component: BcBooksOfAccJournalComponent;
  let fixture: ComponentFixture<BcBooksOfAccJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcBooksOfAccJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcBooksOfAccJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
