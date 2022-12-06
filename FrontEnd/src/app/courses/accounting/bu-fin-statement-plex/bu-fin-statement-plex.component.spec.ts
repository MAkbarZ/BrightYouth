import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuFinStatementPLExComponent } from './bu-fin-statement-plex.component';

describe('BuFinStatementPLExComponent', () => {
  let component: BuFinStatementPLExComponent;
  let fixture: ComponentFixture<BuFinStatementPLExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuFinStatementPLExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuFinStatementPLExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
