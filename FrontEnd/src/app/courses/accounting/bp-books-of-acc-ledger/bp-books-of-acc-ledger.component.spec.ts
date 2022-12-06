import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpBooksOfAccLedgerComponent } from './bp-books-of-acc-ledger.component';

describe('BpBooksOfAccLedgerComponent', () => {
  let component: BpBooksOfAccLedgerComponent;
  let fixture: ComponentFixture<BpBooksOfAccLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpBooksOfAccLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpBooksOfAccLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
