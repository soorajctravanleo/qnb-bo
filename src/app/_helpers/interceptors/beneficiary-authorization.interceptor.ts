import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MockResponse } from '../types/backend';
import * as API from '../apis';
import { MockBeneficiaryAuthorizationService } from '../services/beneficiary-authorization.service';

@Injectable()
export class QnbBeneficiaryAuthorizationInterceptor implements HttpInterceptor {
  constructor(
    private mockBeneficiaryAuth: MockBeneficiaryAuthorizationService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
        if (url.endsWith(API.GET_BENEFICIARY_AUTHORIZATION)) {
          outcome = this.mockBeneficiaryAuth.getBeneficiaryAuthorizations();
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
