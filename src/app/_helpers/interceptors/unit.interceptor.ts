import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as API from '../apis';
import { MockResponse } from '../types/backend';
import { MockUnitService } from '../services/unit.service';

@Injectable()

export class QnbUnitInterceptor implements HttpInterceptor {
  constructor(
    private mockUnitService: MockUnitService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const { url, params, method, headers } = req;
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
        if (url.endsWith(API.GET_UNITS)) {
          outcome = this.mockUnitService.getUnits();
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
