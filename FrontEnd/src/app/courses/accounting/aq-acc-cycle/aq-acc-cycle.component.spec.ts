import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqAccCycleComponent } from './aq-acc-cycle.component';

describe('AqAccCycleComponent', () => {
  let component: AqAccCycleComponent;
  let fixture: ComponentFixture<AqAccCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqAccCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AqAccCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
