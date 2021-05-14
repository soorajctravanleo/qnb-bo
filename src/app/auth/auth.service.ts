import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { QnbAccount } from '../_helpers/models/frontend';
import { LoginResponse } from '../_helpers/types/backend/index';

@Injectable({
  providedIn: 'root',
})
export class QnbAuthService {
  private readonly AUTH_KEY_KEY = 'ak';
  private currentAccount?: QnbAccount = null;

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string) {
    return this.http
      .post('/login', { username, password })
      .pipe(
        mergeMap(data => {
          const { id, token, firstName, lastName } = data as LoginResponse;
          this.currentAccount = new QnbAccount(id, username, token, firstName, lastName);
          sessionStorage.setItem(this.AUTH_KEY_KEY, token);
          return of(this.currentAccount);
        }),
      );
  }

  authenticateToken() {
    const tokenFromStorage = sessionStorage.getItem(this.AUTH_KEY_KEY);

    return this.http
      .post('/authenticate', { token: tokenFromStorage })
      .pipe(
        mergeMap(data => {
          const { id, token, username, firstName, lastName } = data as LoginResponse;
          this.currentAccount = new QnbAccount(id, username, token, firstName, lastName);
          sessionStorage.setItem(this.AUTH_KEY_KEY, token);
          return of(true);
        }),
      );
  }

  logout() {
    sessionStorage.removeItem(this.AUTH_KEY_KEY);
  }

  getCurrentAccount() {
    return this.currentAccount;
  }
}
