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
import { MockPendingRequestService } from '../services/pending-request.service';
import { MockResponse } from '../types/backend';

@Injectable()
export class QnbPendingRequestInterceptor implements HttpInterceptor {
  constructor(
    private mockPrService: MockPendingRequestService,
  ) { }

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
        if (url.endsWith(API.GET_PENDING_REQUEST_ROLES)) {
          outcome = this.mockPrService.getPendingRequestRoles();
        }

        if (url.endsWith(API.GET_PENDING_REQUEST_USERS)) {
          outcome = this.mockPrService.getPendingRequestUsers();
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
