import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlSubJournalPCComponent } from './bl-sub-journal-pc.component';

describe('BlSubJournalPCComponent', () => {
  let component: BlSubJournalPCComponent;
  let fixture: ComponentFixture<BlSubJournalPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlSubJournalPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlSubJournalPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
