import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkSubJournalGJComponent } from './bk-sub-journal-gj.component';

describe('BkSubJournalGJComponent', () => {
  let component: BkSubJournalGJComponent;
  let fixture: ComponentFixture<BkSubJournalGJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkSubJournalGJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BkSubJournalGJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
