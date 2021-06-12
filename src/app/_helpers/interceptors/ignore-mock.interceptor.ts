import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LOGIN } from '../apis';

const BACKEND_INTEGRATED_APIS = [
  LOGIN,
];

@Injectable()
export class QnbIgnoreMockInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url } = req;

    if (this.shouldIgnoreMock(url)) {
      req = req.clone({
        params: new HttpParams().appendAll({
          ignoreMock: 'true'
        }),
      })
    }

    return next.handle(req);
  }

  private shouldIgnoreMock(url: string) {
    for (const integratedAPI of BACKEND_INTEGRATED_APIS) {
      if (url.endsWith(integratedAPI)) {
        return true;
      }
    }

    return false;
  }
}
