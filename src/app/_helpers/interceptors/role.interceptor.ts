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
  GET_ROLES,
  SEARCH_ROLES,
} from '../apis';
import { MockRoleService } from '../services/role.service';
import { MockResponse } from '../types/backend';

@Injectable()
export class QnbRoleInterceptor implements HttpInterceptor {

  constructor(
    private mockRoleService: MockRoleService,
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
        if (url.endsWith(GET_ROLES)) {
          outcome = this.mockRoleService.getRoles();
        }

        if (url.endsWith(SEARCH_ROLES)) {
          const searchTerm = params.get('search');
          outcome = this.mockRoleService.searchRole(searchTerm);
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
