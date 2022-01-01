import { TestBed } from '@angular/core/testing';

import { TransactionsDataService } from './transactions-data.service';

describe('TransactionsDataService', () => {
  let service: TransactionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
