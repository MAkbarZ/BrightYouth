import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSubJournalPurComponent } from './bg-sub-journal-pur.component';

describe('BgSubJournalPurComponent', () => {
  let component: BgSubJournalPurComponent;
  let fixture: ComponentFixture<BgSubJournalPurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgSubJournalPurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgSubJournalPurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
