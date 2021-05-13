import { NgModule } from '@angular/core';

import { QnbRolesRoutingModule } from './roles-routing.module';
import { QnbRolesComponent } from './roles.component';

@NgModule({
  declarations: [
    QnbRolesComponent,
  ],
  imports: [
    QnbRolesRoutingModule,
  ],
})
export class QnbRolesModule { }
