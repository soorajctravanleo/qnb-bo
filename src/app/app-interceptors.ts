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
  QnbUnitInterceptor,
  QnbPendingRequestInterceptor,
} from './_helpers/interceptors';
import { QnbPendingRequestService } from './services';

export const INTERCEPTORS: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: QnbLoginInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbJwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbListInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbUserInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbEntityInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbRoleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: QnbUnitInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: QnbPendingRequestInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: QnbHttpInterceptor, multi: true },
];
