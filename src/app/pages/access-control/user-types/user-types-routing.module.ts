import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { QnbUserTypesComponent } from './user-types.component';

const routes: Route[] = [
  {
    path: '',
    component: QnbUserTypesComponent
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
export class QnbUserTypesRoutingModule { }
