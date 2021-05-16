import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {

  getHostURL(): string {
    switch (window.location.hostname) {
      case 'localhost':
        return '/bo/usrMngmt';

      default:
        return 'http://164.52.200.24:8081/bo/usrMngmt';
    }
  }
}
