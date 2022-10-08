import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaOverviewComponent } from './aa-overview.component';

describe('AaOverviewComponent', () => {
  let component: AaOverviewComponent;
  let fixture: ComponentFixture<AaOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
