import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxDoubleESysComponent } from './ax-double-esys.component';

describe('AxDoubleESysComponent', () => {
  let component: AxDoubleESysComponent;
  let fixture: ComponentFixture<AxDoubleESysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxDoubleESysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxDoubleESysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
