import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcGAAPComponent } from './ac-gaap.component';

describe('AcGAAPComponent', () => {
  let component: AcGAAPComponent;
  let fixture: ComponentFixture<AcGAAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcGAAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcGAAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
