import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { QnbAuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanLoadPages implements CanLoad {

  constructor(
    private qnbAuthService: QnbAuthService,
    private router: Router,
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.qnbAuthService
      .authenticateToken()
      .pipe(
        catchError(_ => {
          this.router.navigateByUrl('/');
          return of(false);
        }),
      );
  }
}