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
        loadChildren: () => import('./service-catalog/service-catalog.module').then(m => m.QnbServiceCatalogModule),
      },
      {
        path: 'user-types',
        loadChildren: () => import('./user-types/user-types.module').then(m => m.QnbUserTypesModule),
      },
      {
        path: 'user-entities',
        loadChildren: () => import('./user-entities/user-entities.module').then(m => m.QnbUserEntitiesModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then
          (m => m.QnbUsersModule),
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then
          (m => m.QnbRolesModule),
      },
      {
        path: 'pending-requests', loadChildren: () => import('./pending-requests/pending-requests.module').then(m => m.PendingRequestsModule)
      },
    ],
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
export class QnbAccessControlRoutingModule { }
