import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

import { MockResponse } from '../types/backend';
import { generateError, generateHttpResponse } from '../utils';

@Injectable()
export class QnbHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { params } = req;

    const handleRoute = () => {
      if (params.has('outcome')) {
        const outcome = JSON.parse(params.get('outcome')) as MockResponse;

        if (outcome.res !== undefined) {
          return generateHttpResponse(outcome.res);
        }

        return generateError(outcome.errorType, outcome.errorMessage);
      }

      return next.handle(req);
    };

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(700))
      .pipe(dematerialize());
  }
}
