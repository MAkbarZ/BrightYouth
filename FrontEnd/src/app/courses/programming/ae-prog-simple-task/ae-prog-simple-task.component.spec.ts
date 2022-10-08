import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeProgSimpleTaskComponent } from './ae-prog-simple-task.component';

describe('AeProgSimpleTaskComponent', () => {
  let component: AeProgSimpleTaskComponent;
  let fixture: ComponentFixture<AeProgSimpleTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeProgSimpleTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeProgSimpleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
