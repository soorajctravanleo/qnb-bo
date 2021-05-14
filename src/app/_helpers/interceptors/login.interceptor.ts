import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

import { QnbAccountService } from '../services/account.service';

@Injectable()
export class QnbLoginInterceptor implements HttpInterceptor {

  constructor(
    private qnbUserService: QnbAccountService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = req;

    const handleRoute = () => {
      if (url.endsWith('/login') && (method === 'POST')) {
        const { username, password } = body;
        return this.qnbUserService.validateLogin(username, password);
      }

      if (url.endsWith('/authenticate') && (method === 'POST')) {
        const { token } = body;
        return this.qnbUserService.validateToken(token);
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
