import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { QnbServiceCatalogComponent } from './service-catalog.component';

const routes: Route[] = [
  {
    path: '',
    component: QnbServiceCatalogComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class QnbServiceCatalogRoutingModule { }
