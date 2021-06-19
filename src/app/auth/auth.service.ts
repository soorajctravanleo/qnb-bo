import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';

import { QnbAccount } from '../_helpers/models/frontend';
import { LoginResponse } from '../_helpers/types/backend/index';
import * as API from '../_helpers/apis';

export type PermissionTypes = 'USER_MANAGEMENT_ADD_MAKER' | 'USER_MANAGEMENT_MODIFY_MAKER' | 'USER_MANAGEMENT_DELETE_MAKER' | 'USER_MANAGEMENT_CHECKER';

@Injectable({
  providedIn: 'root',
})
export class QnbAuthService {
  private readonly AUTH_KEY_KEY = 'ak';
  private currentAccount?: QnbAccount = null;
  private access = [];
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
          const { access_token } = data as LoginResponse;
          let decodedJwt = JSON.parse(atob(access_token.split('.')[1]));
          this.access = decodedJwt['authorities'];
          let userName = decodedJwt['user_name'];
          let firstName = '';
          this.currentAccount = new QnbAccount(1, userName, access_token, userName, '');
          this.setAuthKey(access_token);
          return of(this.currentAccount);
        }),
      );
  }
  hasPermission(type: PermissionTypes) {
    if (this.access.length === 0) {
      let decodedJwt = JSON.parse(atob(this.cookieService.get(this.AUTH_KEY_KEY).split('.')[1]));
      this.access = decodedJwt['authorities'];
    }
    return this.access.includes(type);
  }
  authenticateToken() {
    const tokenFromStorage = this.cookieService.get(this.AUTH_KEY_KEY);
    if (tokenFromStorage) {
      let details = this.getUserDetails();
      this.currentAccount = new QnbAccount(1,
        details.userName,
        details.accessToken,
        details.firstName,
        details.lastName,
      );
    }

    return of(tokenFromStorage ? true : false);
  }
  getUserDetails() {
    let authKey = this.cookieService.get(this.AUTH_KEY_KEY);
    let decodedJwt = JSON.parse(atob(authKey.split('.')[1]));
    return {
      userName: decodedJwt['user_name'],
      firstName: decodedJwt['user_name'],
      lastName: '',
      accessToken: decodedJwt['access_token'],
    };
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
