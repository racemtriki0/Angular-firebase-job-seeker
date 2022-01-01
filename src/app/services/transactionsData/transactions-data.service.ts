import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {transaction} from '../../variables/transaction';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from '../../directives/sortable.directive';
@Injectable({
  providedIn: 'root'
})
export class TransactionsDataService {

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _transactions$ = new BehaviorSubject<transaction[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
  
  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._transactions$.next(result.transactions);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get transactions$() { return this._transactions$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  transactions :transaction[]= [
    {
      id:1,
      licensePlate: "F 15447",
      type: "Entery",
      date: "10/05/2021",
      fullTime: "10/05/2021 11:08:15 PM",
      amount:15,
      state: "entry"
    },
    {
      id:2,
      licensePlate: "P 58540",
      type: "Exist",
      date: "07/11/2021",
      fullTime: "07/11/2021 05:11:05 PM",
      amount:55,
      state: "exit"
    },
    {
      id:3,
      licensePlate: "H 14447",
      type: "Exist",
      date: "08/11/2021",
      fullTime: "08/11/2021 05:20:22 PM",
      amount:50,
      state: "exit"
    },
    {
      id:4,
      licensePlate: "P 52727",
      type: "Exist",
      date: "08/11/2021",
      fullTime: "08/11/2021 06:08:42 PM",
      amount:25,
      state: "entry"
    },
    {
      id:5,
      licensePlate: "P 58540",
      type: "Exist",
      date: "07/11/2021",
      fullTime: "07/11/2021 05:11:05 PM",
      amount:55,
      state: "exit"
    },
    {
      id:6,
      licensePlate: "H 14447",
      type: "Exist",
      date: "08/11/2021",
      fullTime: "08/11/2021 05:20:22 PM",
      amount:50,
      state: "exit"
    },
    {
      id:7,
      licensePlate: "P 52727",
      type: "Exist",
      date: "08/11/2021",
      fullTime: "08/11/2021 06:08:42 PM",
      amount:25,
      state: "entry"
    }
  ]
  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let transactions = sort(this.transactions, sortColumn, sortDirection);

    // 2. filter
    transactions = transactions.filter(transaction => matches(transaction, searchTerm, this.pipe));
    const total = transactions.length;

    // 3. paginate
    transactions = transactions.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({transactions, total});
  }
}
function matches(transaction: transaction, term: string, pipe: PipeTransform) {
  return transaction.licensePlate.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(transaction.amount.toString()).includes(term)
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(transactions: transaction[], column: SortColumn, direction: string): transaction[] {
  if (direction === '' || column === '') {
    return transactions;
  } else {
    return [...transactions].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}


interface SearchResult {
  transactions: transaction[];
  total: number;
}
