import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

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

    const handleRoute = () => {
      if (this.shouldAddJWT(url)) {
        const token = this.qnbAuthService.getToken();
        if (token) {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
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

  private shouldAddJWT(url: string) {
    for (let exemption of EXEMPTIONS) {
      if (url.endsWith(exemption)) {
        return false;
      }
    }

    return true;
  }
}