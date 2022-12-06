import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwFinStatementCFDComponent } from './bw-fin-statement-cfd.component';

describe('BwFinStatementCFDComponent', () => {
  let component: BwFinStatementCFDComponent;
  let fixture: ComponentFixture<BwFinStatementCFDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwFinStatementCFDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwFinStatementCFDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
