import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhSubJournalPurRetComponent } from './bh-sub-journal-pur-ret.component';

describe('BhSubJournalPurRetComponent', () => {
  let component: BhSubJournalPurRetComponent;
  let fixture: ComponentFixture<BhSubJournalPurRetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhSubJournalPurRetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhSubJournalPurRetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
