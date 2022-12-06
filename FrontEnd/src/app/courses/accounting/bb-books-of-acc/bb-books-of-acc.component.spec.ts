import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbBooksOfAccComponent } from './bb-books-of-acc.component';

describe('BbBooksOfAccComponent', () => {
  let component: BbBooksOfAccComponent;
  let fixture: ComponentFixture<BbBooksOfAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbBooksOfAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbBooksOfAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
