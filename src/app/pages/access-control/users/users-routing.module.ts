import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { QnbUsersComponent } from './users.component';

const routes: Route[] = [
  {
    path: '',
    component: QnbUsersComponent,
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
export class QnbUsersRoutingModule { }
