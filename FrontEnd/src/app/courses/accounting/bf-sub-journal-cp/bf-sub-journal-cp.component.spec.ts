import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfSubJournalCPComponent } from './bf-sub-journal-cp.component';

describe('BfSubJournalCPComponent', () => {
  let component: BfSubJournalCPComponent;
  let fixture: ComponentFixture<BfSubJournalCPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfSubJournalCPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfSubJournalCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
