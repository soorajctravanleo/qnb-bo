import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {

  getHostURL(): string {
    switch (window.location.hostname) {
      case 'localhost':
        return '/bo';

      default:
        return 'https://qnb.nintrivalabs.com/bo';
    }
  }
}
