import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionColComponent } from './description-col.component';

describe('DescriptionColComponent', () => {
  let component: DescriptionColComponent;
  let fixture: ComponentFixture<DescriptionColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
