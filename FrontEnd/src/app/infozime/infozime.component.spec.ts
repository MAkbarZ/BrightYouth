import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfozimeComponent } from './infozime.component';

describe('InfozimeComponent', () => {
  let component: InfozimeComponent;
  let fixture: ComponentFixture<InfozimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfozimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfozimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
