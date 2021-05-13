import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

import { QnbUserService } from '../services/user.service';

@Injectable()
export class QnbLoginInterceptor implements HttpInterceptor {

  constructor(
    private qnbUserService: QnbUserService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = req;

    const handleRoute = () => {
      if (url.endsWith('/authenticate') && (method === 'POST')) {
        const { username, password } = body;
        return this.qnbUserService.validateLogin(username, password);
      }

      return next.handle(req);
    }

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}