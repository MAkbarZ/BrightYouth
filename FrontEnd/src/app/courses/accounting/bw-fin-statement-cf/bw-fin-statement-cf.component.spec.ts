import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwFinStatementCFComponent } from './bw-fin-statement-cf.component';

describe('BwFinStatementCFComponent', () => {
  let component: BwFinStatementCFComponent;
  let fixture: ComponentFixture<BwFinStatementCFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwFinStatementCFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwFinStatementCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
