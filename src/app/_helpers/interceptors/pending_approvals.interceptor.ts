import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  GET_PENDING_ROLE_APPROVALS,
  GET_PENDING_USER_APPROVALS,
} from '../apis';
import { MockPendingApprovalsService } from '../services/pending_approvals.service';
import { MockResponse } from '../types/backend';

@Injectable()
export class QnbPendingApprovalInterceptor implements HttpInterceptor {
  constructor(
    private mockPendingApprovalsService: MockPendingApprovalsService,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, params } = req;
    let outcome: MockResponse;

    if (
      params.has('outcome')
      || params.has('ignoreMock')
    ) {
      return next.handle(req);
    }

    if (!headers.has('Authorization')) {
      outcome = {
        errorType: 'unauthorized',
        errorMessage: 'You are not authorized.',
      };
    } else {
      if (method === 'GET') {
        if (url.endsWith(GET_PENDING_ROLE_APPROVALS)) {
          outcome = this.mockPendingApprovalsService.getpendingRoles();
        }

        if (url.endsWith(GET_PENDING_USER_APPROVALS)) {
          outcome = this.mockPendingApprovalsService.getpendingUsers();
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
