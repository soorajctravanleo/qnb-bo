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
  GET_USERS,
  EDIT_USER,
  DELETE_USER,
  CREATE_USER,
} from '../apis';
import { MockUserService } from '../services/user.service';
import { MockResponse } from '../types/backend';

@Injectable()
export class QnbUserInterceptor implements HttpInterceptor {

  constructor(
    private mockUserService: MockUserService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, body, headers, params } = req;
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
        if (url.endsWith(GET_USERS)) {
          outcome = this.mockUserService.getUsers();
        }
      }

      if (method === 'POST') {
        if (url.endsWith(CREATE_USER)) {
          outcome = this.mockUserService.createUser(body);
        }

        if (url.endsWith(EDIT_USER)) {
          const { id, data } = body;
          outcome = this.mockUserService.editUser(id, data);
        }

        if (url.endsWith(DELETE_USER)) {
          outcome = this.mockUserService.deleteUser(body.id);
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
