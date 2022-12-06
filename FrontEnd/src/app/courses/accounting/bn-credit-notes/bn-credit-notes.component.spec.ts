import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnCreditNotesComponent } from './bn-credit-notes.component';

describe('BnCreditNotesComponent', () => {
  let component: BnCreditNotesComponent;
  let fixture: ComponentFixture<BnCreditNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnCreditNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnCreditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
