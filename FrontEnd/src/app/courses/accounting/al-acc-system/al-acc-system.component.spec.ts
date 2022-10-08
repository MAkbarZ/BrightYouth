import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlAccSystemComponent } from './al-acc-system.component';

describe('AlAccSystemComponent', () => {
  let component: AlAccSystemComponent;
  let fixture: ComponentFixture<AlAccSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlAccSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlAccSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
