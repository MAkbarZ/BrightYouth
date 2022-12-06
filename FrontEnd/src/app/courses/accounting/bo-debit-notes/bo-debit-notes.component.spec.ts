import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoDebitNotesComponent } from './bo-debit-notes.component';

describe('BoDebitNotesComponent', () => {
  let component: BoDebitNotesComponent;
  let fixture: ComponentFixture<BoDebitNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoDebitNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoDebitNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
