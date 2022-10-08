import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhAccTypesComponent } from './ah-acc-types.component';

describe('AhAccTypesComponent', () => {
  let component: AhAccTypesComponent;
  let fixture: ComponentFixture<AhAccTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhAccTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhAccTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
