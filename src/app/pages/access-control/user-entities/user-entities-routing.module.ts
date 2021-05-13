import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { QnbUserEntitiesComponent } from './user-entities.component';

const routes: Route[] = [
  {
    path: '',
    component: QnbUserEntitiesComponent,
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
export class QnbUserEntitiesRoutingModule { }
