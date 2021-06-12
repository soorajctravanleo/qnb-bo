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
import { UrlService } from '../services/url.service';

@Injectable()
export class QnbHttpInterceptor implements HttpInterceptor {

  constructor(private urlService: UrlService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { params, url } = req;

    const handleRoute = () => {
      if (params.has('outcome')) {
        const outcome = JSON.parse(params.get('outcome')) as MockResponse;

        if (outcome.res !== undefined) {
          return generateHttpResponse(outcome.res);
        }

        return generateError(outcome.errorType, outcome.errorMessage);
      }

      req = req.clone({
        url: this.urlService.getHostURL() + url,
      });

      if (params.has('ignoreMock')) {
        req = req.clone({
          params: req.params.delete('ignoreMock'),
        });
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
