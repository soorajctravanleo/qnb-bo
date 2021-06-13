import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';

import { QnbAccount } from '../_helpers/models/frontend';
import { LoginResponse } from '../_helpers/types/backend/index';
import * as API from '../_helpers/apis';

@Injectable({
  providedIn: 'root',
})
export class QnbAuthService {
  private readonly AUTH_KEY_KEY = 'ak';
  private currentAccount?: QnbAccount = null;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  login(username: string, password: string) {
    //let body = new URLSearchParams();
    const body = new HttpParams()
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password')
    // let body = { grant_type: 'password' }
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic cW5iX2NsaWVudF9pZDpzZWNyZXRfa2V5X2hramg0NEA2OQ==', });
    return this.http
      .post(API.LOGIN, body, {
        headers
      })
      .pipe(
        mergeMap(data => {
          console.log(data);
          const { id, token, firstName, lastName } = data as LoginResponse;
          this.currentAccount = new QnbAccount(id, username, token, firstName, lastName);
          this.setAuthKey(token);
          return of(this.currentAccount);
        }),
      );
  }

  authenticateToken() {
    const tokenFromStorage = this.cookieService.get(this.AUTH_KEY_KEY);

    return this.http
      .post(API.AUTHENTICATE, { token: tokenFromStorage })
      .pipe(
        mergeMap(data => {
          const { id, token, username, firstName, lastName } = data as LoginResponse;
          this.currentAccount = new QnbAccount(id, username, token, firstName, lastName);
          return of(true);
        }),
      );
  }

  logout() {
    this.cookieService.delete(this.AUTH_KEY_KEY, '/');
    this.router.navigateByUrl('/');
  }

  getCurrentAccount() {
    return this.currentAccount;
  }

  getToken() {
    return this.cookieService.get(this.AUTH_KEY_KEY);
  }

  private setAuthKey(token: string) {
    const sessionTime = 5 * 60 * 60 * 1000; // 1 hour in milliseconds
    const expiryTime = new Date().getTime() + sessionTime;
    this.cookieService.set(this.AUTH_KEY_KEY, token, {
      expires: new Date(expiryTime),
      path: '/',
    });
  }
}
