import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfProgImproveProgComponent } from './af-prog-improve-prog.component';

describe('AfProgImproveProgComponent', () => {
  let component: AfProgImproveProgComponent;
  let fixture: ComponentFixture<AfProgImproveProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfProgImproveProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfProgImproveProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
