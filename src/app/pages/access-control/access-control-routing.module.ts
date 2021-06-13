import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { QnbAccessControlComponent } from './access-control.component';

const routes: Route[] = [
  {
    path: '',
    component: QnbAccessControlComponent,
    children: [
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
        path: 'pending-requests', loadChildren: () =>
          import('./pending-requests/pending-requests.module').then(m =>
            m.PendingRequestsModule),
      },
      {
        path: 'pending-approvals', loadChildren: () =>
          import('./pending-approvals/pending-approvals.module').then(
            m => m.PendingApprovalsModule),
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
