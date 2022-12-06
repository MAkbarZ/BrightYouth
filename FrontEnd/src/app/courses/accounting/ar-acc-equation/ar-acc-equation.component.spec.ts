import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArAccEquationComponent } from './ar-acc-equation.component';

describe('ArAccEquationComponent', () => {
  let component: ArAccEquationComponent;
  let fixture: ComponentFixture<ArAccEquationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArAccEquationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArAccEquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
