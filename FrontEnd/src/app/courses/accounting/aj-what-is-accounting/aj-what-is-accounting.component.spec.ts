import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjWhatIsAccountingComponent } from './aj-what-is-accounting.component';

describe('AjWhatIsAccountingComponent', () => {
  let component: AjWhatIsAccountingComponent;
  let fixture: ComponentFixture<AjWhatIsAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjWhatIsAccountingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjWhatIsAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
