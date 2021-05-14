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
import { MockListService } from '../services/list.service';
import { generateError } from '../utils';

@Injectable()
export class QnbListInterceptor implements HttpInterceptor {

  constructor(
    private mockListService: MockListService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, params } = req;

    const handleRoute = () => {
      if (!headers.has('authorization')) {
        return generateError('unauthorized', 'You are not authorized to access this data.');
      }

      if (method === 'GET') {
        if (url.endsWith(API.GET_COUNTRIES)) {
          return this.mockListService.getCountries();
        }
  
        if (url.endsWith(API.GET_LANGUAGES)) {
          return this.mockListService.getLanguages();
        }

        if (url.endsWith(API.GET_TIMEZONES)) {
          return this.mockListService.getTimezones();
        }

        if (url.endsWith(API.SEARCH_COUNTRIES)) {
          const searchTerm = params.get('search');
          return this.mockListService.searchCountry(searchTerm);
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
