import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByClosingEntriesExComponent } from './by-closing-entries-ex.component';

describe('ByClosingEntriesExComponent', () => {
  let component: ByClosingEntriesExComponent;
  let fixture: ComponentFixture<ByClosingEntriesExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByClosingEntriesExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByClosingEntriesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
