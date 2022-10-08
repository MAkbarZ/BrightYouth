import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnTyesOfAccountingComponent } from './an-tyes-of-accounting.component';

describe('AnTyesOfAccountingComponent', () => {
  let component: AnTyesOfAccountingComponent;
  let fixture: ComponentFixture<AnTyesOfAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnTyesOfAccountingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnTyesOfAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
