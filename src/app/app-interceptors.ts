import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  QnbLoginInterceptor,
  QnbJwtInterceptor,
  QnbListInterceptor,
  QnbUserInterceptor,
  QnbEntityInterceptor,
  QnbHttpInterceptor,
  QnbRoleInterceptor,
} from './_helpers/interceptors';

export const INTERCEPTORS: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: QnbLoginInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbJwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbListInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbUserInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbEntityInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbRoleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbHttpInterceptor, multi: true },
];
