import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { QnbRolesComponent } from './roles.component';

const routes: Route[] = [
  {
    path: '',
    component: QnbRolesComponent,
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
export class QnbRolesRoutingModule { }
