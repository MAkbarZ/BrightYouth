import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeAssumptionsComponent } from './ae-assumptions.component';

describe('AeAssumptionsComponent', () => {
  let component: AeAssumptionsComponent;
  let fixture: ComponentFixture<AeAssumptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeAssumptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeAssumptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
