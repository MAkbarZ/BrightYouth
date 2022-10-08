import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmHistoryAccComponent } from './am-history-acc.component';

describe('AmHistoryAccComponent', () => {
  let component: AmHistoryAccComponent;
  let fixture: ComponentFixture<AmHistoryAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmHistoryAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmHistoryAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
