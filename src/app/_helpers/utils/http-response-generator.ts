import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export const generateHttpResponse = <T>(body?: T) => {
  return of(new HttpResponse({
    status: 200,
    body,
  }));
};
