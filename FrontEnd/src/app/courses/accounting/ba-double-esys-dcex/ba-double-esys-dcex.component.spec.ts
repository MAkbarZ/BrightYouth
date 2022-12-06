import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaDoubleESysDCExComponent } from './ba-double-esys-dcex.component';

describe('BaDoubleESysDCExComponent', () => {
  let component: BaDoubleESysDCExComponent;
  let fixture: ComponentFixture<BaDoubleESysDCExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaDoubleESysDCExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaDoubleESysDCExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
