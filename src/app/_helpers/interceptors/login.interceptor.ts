import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

import * as API from '../apis';
import { MockAccountService } from '../services/account.service';

@Injectable()
export class QnbLoginInterceptor implements HttpInterceptor {

  constructor(
    private mockAccountService: MockAccountService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, body } = req;

    const handleRoute = () => {
      if (method === 'POST') {
        if (url.endsWith(API.LOGIN)) {
          const { username, password } = body;
          return this.mockAccountService.validateLogin(username, password);
        }
  
        if (url.endsWith(API.AUTHENTICATE)) {
          const { token } = body;
          return this.mockAccountService.validateToken(token);
        }
      }

      return next.handle(req);
    };

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}
