import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  GET_ACCOUNT_TRANSACTION_DESCS,
  GET_UNITS,
  GET_CHEQUES_TRANSACTION_DESCS,
  GET_CONTACT_BANK_TRANSACTION_DESCS,
  GET_IPO_TRANSACTION_DESCS,
} from '../_helpers/apis';
import {
  MockUnit,
  MockIPOTransactionDesc,
  MockContactBankTransactionDesc,
  MockChequesTransactionDesc,
  MockAccountsTransactionDesc,
 } from '../_helpers/models/backend';

@Injectable({
  providedIn: 'root',
})

export class QnbUnitService {
  private units: MockUnit[] = [];
  private accountsTransactionDescs: MockAccountsTransactionDesc[] = [];
  private chequesTransactionDescs: MockChequesTransactionDesc[] = [];
  private contactBankTransactionDescs: MockContactBankTransactionDesc[] = [];
  private ipoTransactionDescs: MockIPOTransactionDesc[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  fetchUnits() {
    return (this.http.get(GET_UNITS) as Observable<MockUnit[]>)
    .pipe(
      tap(units => {
        this.units = units;
      }),
    );
  }

  getUnits() {
    if (this.units.length === 0) {
      return this.fetchUnits();
    }
    return of(this.units);
  }

  fetchAccountTransactionDescs() {
    return (this.http.get(GET_ACCOUNT_TRANSACTION_DESCS) as Observable<MockAccountsTransactionDesc[]>)
    .pipe(
      tap(transactionDescs => {
        this.accountsTransactionDescs = transactionDescs;
      }),
    );
  }

  getAccountTransactionDescs() {
    if (this.accountsTransactionDescs.length === 0) {
      return this.fetchAccountTransactionDescs();
    }
    return of(this.accountsTransactionDescs);
  }

  fetchChequesTransactionDescs() {
    return (this.http.get(GET_CHEQUES_TRANSACTION_DESCS) as Observable<MockChequesTransactionDesc[]>)
    .pipe(
      tap(transactionDescs => {
        this.chequesTransactionDescs = transactionDescs;
      }),
    );
  }

  getChequesTransactionDescs() {
    if (this.chequesTransactionDescs.length === 0) {
      return this.fetchChequesTransactionDescs();
    }
    return of(this.chequesTransactionDescs);
  }

  fetchContactBankTransactionDescs() {
    return (this.http.get(GET_CONTACT_BANK_TRANSACTION_DESCS) as Observable<MockContactBankTransactionDesc[]>)
    .pipe(
      tap(transactionDescs => {
        this.contactBankTransactionDescs = transactionDescs;
      }),
    );
  }

  getContactBankTransactionDescs() {
    if (this.contactBankTransactionDescs.length === 0) {
      return this.fetchContactBankTransactionDescs();
    }
    return of(this.contactBankTransactionDescs);
  }

  fetchIPOTransactionDescs() {
    return (this.http.get(GET_IPO_TRANSACTION_DESCS) as Observable<MockIPOTransactionDesc[]>)
    .pipe(
      tap(transactionDescs => {
        this.ipoTransactionDescs = transactionDescs;
      }),
    );
  }

  getIPOTransactionDescs() {
    if (this.ipoTransactionDescs.length === 0) {
      return this.fetchIPOTransactionDescs();
    }
    return of(this.ipoTransactionDescs);
  }
}
