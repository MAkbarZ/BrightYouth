import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BzClosingEntriesELComponent } from './bz-closing-entries-el.component';

describe('BzClosingEntriesELComponent', () => {
  let component: BzClosingEntriesELComponent;
  let fixture: ComponentFixture<BzClosingEntriesELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BzClosingEntriesELComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BzClosingEntriesELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
