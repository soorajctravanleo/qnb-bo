import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { QnbAccessControlComponent } from './access-control.component';

const routes: Route[] = [
  {
    path: '',
    component: QnbAccessControlComponent,
    children: [
      {
        path: 'service-catalog',
        loadChildren: () => import('./service-catalog/service-catalog.module').then(m => m.QnbServiceCatalogModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class QnbAccessControlRoutingModule {}