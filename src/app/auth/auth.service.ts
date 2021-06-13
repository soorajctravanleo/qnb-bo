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
    // let body = new URLSearchParams();
    const head = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic cW5iX2NsaWVudF9pZDpzZWNyZXRfa2V5X2hramg0NEA2OQ==');

    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);
    return this.http
      .post(API.LOGIN, body, {
        headers: head,
      })
      .pipe(
        mergeMap(data => {
          const { id, access_token } = data as LoginResponse;
          this.currentAccount = new QnbAccount(id, 'sysadmin', access_token, 'System', 'admin');
          this.setAuthKey(access_token);
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
          const { id, access_token } = data as LoginResponse;
          this.currentAccount = new QnbAccount(id, 'sysadmin', access_token, 'System', 'admin');
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
