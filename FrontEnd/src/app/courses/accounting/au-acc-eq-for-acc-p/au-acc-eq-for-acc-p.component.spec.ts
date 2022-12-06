import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuAccEqForAccPComponent } from './au-acc-eq-for-acc-p.component';

describe('AuAccEqForAccPComponent', () => {
  let component: AuAccEqForAccPComponent;
  let fixture: ComponentFixture<AuAccEqForAccPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuAccEqForAccPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuAccEqForAccPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
