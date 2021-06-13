import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LOGIN, AUTHENTICATE } from '../apis';
import { MockAccountService } from '../services/account.service';
import { MockResponse } from '../types/backend';

@Injectable()
export class QnbLoginInterceptor implements HttpInterceptor {

  constructor(
    private mockAccountService: MockAccountService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, body, params } = req;
    let outcome: MockResponse;

    if (params.has('ignoreMock')) {
      return next.handle(req);
    }

    if (method === 'POST') {
      if (url.endsWith(LOGIN)) {
        const { username, password } = body;
        outcome = this.mockAccountService.validateLogin(username, password);
      }

      if (url.endsWith(AUTHENTICATE)) {
        const { token } = body;
        outcome = this.mockAccountService.validateToken(token);
      }
    }

    if (outcome) {
      req = req.clone({
        params: new HttpParams().appendAll({
          outcome: JSON.stringify(outcome),
        }),
      });
    }

    return next.handle(req);
  }
}
