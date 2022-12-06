import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzDoubleESysDCComponent } from './az-double-esys-dc.component';

describe('AzDoubleESysDCComponent', () => {
  let component: AzDoubleESysDCComponent;
  let fixture: ComponentFixture<AzDoubleESysDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzDoubleESysDCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzDoubleESysDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
