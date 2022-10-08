import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApImpactBusinessStraComponent } from './ap-impact-business-stra.component';

describe('ApImpactBusinessStraComponent', () => {
  let component: ApImpactBusinessStraComponent;
  let fixture: ComponentFixture<ApImpactBusinessStraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApImpactBusinessStraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApImpactBusinessStraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
