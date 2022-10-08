import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfConstraintsComponent } from './af-constraints.component';

describe('AfConstraintsComponent', () => {
  let component: AfConstraintsComponent;
  let fixture: ComponentFixture<AfConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfConstraintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
