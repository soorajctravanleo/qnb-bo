import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { User } from '../_helpers/models/frontend';
import { LoginResponse } from '../_helpers/types/backend/index';

@Injectable({
  providedIn: 'root',
})
export class QnbAuthService {
  private readonly AUTH_KEY_KEY = 'ak';

  currentUser?: User = null;

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string) {
    return this.http
      .post('/authenticate', {
        username,
        password,
      })
      .pipe(
        mergeMap(data => {
          const { id, token, firstName, lastName } = data as LoginResponse;
          this.currentUser = new User(id, username, token, firstName, lastName);
          sessionStorage.setItem(this.AUTH_KEY_KEY, token);
          return of(this.currentUser);
        }),
      );
  }

  logout() {
    sessionStorage.removeItem(this.AUTH_KEY_KEY);
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
