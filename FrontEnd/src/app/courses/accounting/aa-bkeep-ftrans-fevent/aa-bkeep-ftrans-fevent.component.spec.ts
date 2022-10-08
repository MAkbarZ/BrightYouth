import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaBKeepFTransFEventComponent } from './aa-bkeep-ftrans-fevent.component';

describe('AaBKeepFTransFEventComponent', () => {
  let component: AaBKeepFTransFEventComponent;
  let fixture: ComponentFixture<AaBKeepFTransFEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaBKeepFTransFEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaBKeepFTransFEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
