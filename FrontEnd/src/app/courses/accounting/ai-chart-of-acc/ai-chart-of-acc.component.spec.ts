import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChartOfAccComponent } from './ai-chart-of-acc.component';

describe('AiChartOfAccComponent', () => {
  let component: AiChartOfAccComponent;
  let fixture: ComponentFixture<AiChartOfAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiChartOfAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChartOfAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
