import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeSubJournalCRComponent } from './be-sub-journal-cr.component';

describe('BeSubJournalCRComponent', () => {
  let component: BeSubJournalCRComponent;
  let fixture: ComponentFixture<BeSubJournalCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeSubJournalCRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeSubJournalCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
