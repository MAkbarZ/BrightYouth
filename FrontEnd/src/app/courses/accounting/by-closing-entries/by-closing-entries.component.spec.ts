import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByClosingEntriesComponent } from './by-closing-entries.component';

describe('ByClosingEntriesComponent', () => {
  let component: ByClosingEntriesComponent;
  let fixture: ComponentFixture<ByClosingEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByClosingEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByClosingEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
