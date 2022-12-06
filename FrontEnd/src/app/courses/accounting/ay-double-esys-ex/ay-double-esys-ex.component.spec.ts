import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyDoubleESysExComponent } from './ay-double-esys-ex.component';

describe('AyDoubleESysExComponent', () => {
  let component: AyDoubleESysExComponent;
  let fixture: ComponentFixture<AyDoubleESysExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyDoubleESysExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyDoubleESysExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
