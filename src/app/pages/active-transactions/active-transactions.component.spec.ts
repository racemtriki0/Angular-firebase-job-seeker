import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTransactionsComponent } from './active-transactions.component';

describe('ActiveTransactionsComponent', () => {
  let component: ActiveTransactionsComponent;
  let fixture: ComponentFixture<ActiveTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
