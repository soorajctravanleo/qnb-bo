import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { QnbAuthService } from '../../auth/auth.service';

import { LOGIN, AUTHENTICATE } from '../apis';

const EXEMPTIONS = [
  LOGIN,
  AUTHENTICATE,
];

@Injectable()
export class QnbJwtInterceptor implements HttpInterceptor {

  constructor(
    private qnbAuthService: QnbAuthService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url } = req;
    if (this.shouldAddJWT(url)) {
      const token = this.qnbAuthService.getToken();
      if (token) {
        req = req.clone({
          setHeaders: {
            authorization: `Bearer ${token}`,
          },
        });
      }
    }

    return next.handle(req);
  }

  private shouldAddJWT(url: string) {
    for (const exemption of EXEMPTIONS) {
      if (url.endsWith(exemption)) {
        return false;
      }
    }

    return true;
  }
}
