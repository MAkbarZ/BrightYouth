import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgTheWordAccComponent } from './ag-the-word-acc.component';

describe('AgTheWordAccComponent', () => {
  let component: AgTheWordAccComponent;
  let fixture: ComponentFixture<AgTheWordAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgTheWordAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgTheWordAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
