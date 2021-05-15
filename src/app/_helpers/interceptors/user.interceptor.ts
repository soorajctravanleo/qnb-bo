import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

import { 
  GET_USERS, 
  EDIT_USER, 
  DELETE_USER, 
  CREATE_USER,
} from '../apis';
import { MockUserService } from '../services/user.service';
import { generateError } from '../utils';

@Injectable()
export class QnbUserInterceptor implements HttpInterceptor {

  constructor(
    private mockUserService: MockUserService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, body, headers } = req;

    const handleRoute = () => {
      if (!headers.has('authorization')) {
        return generateError('unauthorized', 'You are not authorized.');
      }

      if (method === 'GET') {
        if (url.endsWith(GET_USERS)) {
          return this.mockUserService.getUsers();
        }
      }

      if (method === 'POST') {
        if (url.endsWith(CREATE_USER)) {
          return this.mockUserService.createUser(body);
        }
  
        if (url.endsWith(EDIT_USER)) {
          const { id, data } = body;
          return this.mockUserService.editUser(id, data);
        }

        if (url.endsWith(DELETE_USER)) {
          return this.mockUserService.deleteUser(body.id);
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
