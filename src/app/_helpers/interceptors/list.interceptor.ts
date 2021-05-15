import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import * as API from '../apis';
import { MockListService } from '../services/list.service';
import { MockResponse } from '../types/backend';

@Injectable()
export class QnbListInterceptor implements HttpInterceptor {

  constructor(
    private mockListService: MockListService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, params } = req;
    let outcome: MockResponse;

    if (params.has('outcome')) {
      return next.handle(req);
    }

    if (!headers.has('authorization')) {
      outcome = {
        errorType: 'unauthorized',
        errorMessage: 'You are not authorized.',
      };
    } else {
      if (method === 'GET') {
        if (url.endsWith(API.GET_COUNTRIES)) {
          outcome = this.mockListService.getCountries();
        }

        if (url.endsWith(API.GET_LANGUAGES)) {
          outcome = this.mockListService.getLanguages();
        }

        if (url.endsWith(API.GET_TIMEZONES)) {
          outcome = this.mockListService.getTimezones();
        }

        if (url.endsWith(API.SEARCH_COUNTRIES)) {
          const searchTerm = params.get('search');
          outcome = this.mockListService.searchCountry(searchTerm);
        }
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
