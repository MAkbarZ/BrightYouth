import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtAccEqForISComponent } from './at-acc-eq-for-is.component';

describe('AtAccEqForISComponent', () => {
  let component: AtAccEqForISComponent;
  let fixture: ComponentFixture<AtAccEqForISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtAccEqForISComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtAccEqForISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
