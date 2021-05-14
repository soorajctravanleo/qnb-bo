import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbTreeGridModule,
  NbDialogModule,
  NbSelectModule,
  NbCardModule,
  NbCheckboxModule,
} from '@nebular/theme';

import { QnbRolesRoutingModule } from './roles-routing.module';
import { QnbRolesComponent } from './roles.component';

@NgModule({
  declarations: [
    QnbRolesComponent,
  ],
  imports: [
    CommonModule,
    QnbRolesRoutingModule,
    NbTreeGridModule,
    NbDialogModule,
    NbSelectModule,
    NbCardModule,
    NbCheckboxModule,
  ],
})
export class QnbRolesModule { }
