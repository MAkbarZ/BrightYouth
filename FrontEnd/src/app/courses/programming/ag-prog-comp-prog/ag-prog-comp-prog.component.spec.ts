import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgProgCompProgComponent } from './ag-prog-comp-prog.component';

describe('AgProgCompProgComponent', () => {
  let component: AgProgCompProgComponent;
  let fixture: ComponentFixture<AgProgCompProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgProgCompProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgProgCompProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
