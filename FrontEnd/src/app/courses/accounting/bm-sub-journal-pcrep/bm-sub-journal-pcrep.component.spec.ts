import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmSubJournalPCRepComponent } from './bm-sub-journal-pcrep.component';

describe('BmSubJournalPCRepComponent', () => {
  let component: BmSubJournalPCRepComponent;
  let fixture: ComponentFixture<BmSubJournalPCRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmSubJournalPCRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmSubJournalPCRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
