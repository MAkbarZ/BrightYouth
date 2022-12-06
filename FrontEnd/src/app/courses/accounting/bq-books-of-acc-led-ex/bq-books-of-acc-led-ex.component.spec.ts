import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BqBooksOfAccLedExComponent } from './bq-books-of-acc-led-ex.component';

describe('BqBooksOfAccLedExComponent', () => {
  let component: BqBooksOfAccLedExComponent;
  let fixture: ComponentFixture<BqBooksOfAccLedExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BqBooksOfAccLedExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BqBooksOfAccLedExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
