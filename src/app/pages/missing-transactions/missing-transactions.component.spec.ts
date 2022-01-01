import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingTransactionsComponent } from './missing-transactions.component';

describe('MissingTransactionsComponent', () => {
  let component: MissingTransactionsComponent;
  let fixture: ComponentFixture<MissingTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
