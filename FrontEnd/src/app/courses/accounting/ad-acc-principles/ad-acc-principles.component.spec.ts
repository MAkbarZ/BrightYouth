import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAccPrinciplesComponent } from './ad-acc-principles.component';

describe('AdAccPrinciplesComponent', () => {
  let component: AdAccPrinciplesComponent;
  let fixture: ComponentFixture<AdAccPrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAccPrinciplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAccPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
