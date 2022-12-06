import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdSubJournalComponent } from './bd-sub-journal.component';

describe('BdSubJournalComponent', () => {
  let component: BdSubJournalComponent;
  let fixture: ComponentFixture<BdSubJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdSubJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdSubJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
