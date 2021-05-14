import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { QnbAuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateLogin implements CanActivate {

  constructor(
    private qnbAuthService: QnbAuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.qnbAuthService
      .authenticateToken()
      .pipe(
        tap(isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigateByUrl('/pages');
            return of(false);
          }
        }),
        catchError(_ => {
          return of(true);
        }),
      );
  }
}
