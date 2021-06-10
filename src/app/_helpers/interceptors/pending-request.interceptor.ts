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
  GET_PENDING_REQUEST_ROLES,
  GET_PENDING_REQUEST_USERS,
} from '../apis';
import { MockPendingRequestService } from '../services/pending-request.service';
import { MockResponse } from '../types/backend';
import { url } from 'inspector';

@Injectable()

export class QnbPendingRequestInterceptor implements HttpInterceptor {
  
  constructor(
    private mockPrService: MockPendingRequestService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, params} = req;
    let outcome: MockResponse;

    if (params.has('outcome')) {
      return next.handle(req);
    }

    if(!headers.has('authorization')) {
      outcome = {
        errorType: 'unauthorized',
        errorMessage: 'You are not authorized.',
      };
    } else {
      if (method === 'GET') {
        if(url.endsWith(GET_PENDING_REQUEST_ROLES)) {
          outcome = this.mockPrService.getPendingRequestRoles();
        }

        if(url.endsWith(GET_PENDING_REQUEST_USERS)) {
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
